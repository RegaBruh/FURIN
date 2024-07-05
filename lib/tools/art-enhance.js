import {
    fetch
} from "undici";
import {
    FormData,
    Blob
} from "formdata-node";
import Replicate from "replicate";
import {
    fileTypeFromBuffer
} from "file-type";
import crypto from "crypto";

class ImageProcessor {
    constructor(hotpotai, replicate) {
        this.hotpotai = hotpotai;
        this.replicate = replicate;
        this.apiEndpoint = "https://api.hotpot.ai";
        this.zyroEndpoint = "https://backend.zyro.com/v1/ai";
    }

    generateRequestId() {
        return crypto.randomBytes(8).toString("hex");
    }

    async processImage(endpoint, content, additionalData = {}) {
        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content);
            const requestId = this.generateRequestId();
            const filename = `${requestId}.${ext}`;

            const formData = new FormData();
            formData.append("image", new Blob([content], {
                type: mime
            }), filename);

            const headers = {
                ...additionalData.headers,
                ...(additionalData.authRequired && {
                    "Authorization": this.hotpotai
                })
            };

            const payload = {
                requestId,
                fileExt: ext,
                fileType: mime,
                ...additionalData
            };

            const response = await fetch(`${endpoint}/${additionalData.apiPath}`, {
                method: "POST",
                headers,
                body: formData
            });

            if (!response.ok) {
                throw new Error(`${additionalData.apiPath} failed with status: ${response.status}`);
            }

            const imageArrayBuffer = await response.arrayBuffer();
            return Buffer.from(imageArrayBuffer);
        } catch (error) {
            console.error(`Error in ${additionalData.apiPath}: ${error.message}`);
            throw error;
        }
    }

    async colorizePicture(content) {
        return await this.processImage(this.apiEndpoint, content, {
            apiPath: "colorize-picture",
            renderFactor: "20",
            authRequired: true
        });
    }

    async restorePicture(content, withScratch = false) {
        return await this.processImage(this.apiEndpoint, content, {
            apiPath: "restore-picture",
            withScratch,
            authRequired: true
        });
    }

    async removeBackground(content) {
        const base64Image = Buffer.from(content).toString("base64");
        const imageData = `data:image/PNG;base64,${base64Image}`;
        const payload = JSON.stringify({
            image: imageData
        });

        const headers = {
            "Content-Type": "application/json"
        };
        return await this.processImage(this.zyroEndpoint, payload, {
            apiPath: "remove-background",
            headers
        });
    }

    async upscaleImage(content) {
        const base64Image = Buffer.from(content).toString("base64");
        const imageData = `data:image/PNG;base64,${base64Image}`;
        const payload = JSON.stringify({
            image: imageData
        });

        const headers = {
            "Content-Type": "application/json"
        };
        return await this.processImage(this.zyroEndpoint, payload, {
            apiPath: "upscale-image",
            headers
        });
    }

    async artEnhance(img) {
        const replicate = new Replicate({
            auth: this.replicate
        });
        const model = "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3";
        const input = {
            img
        };
        const output = await replicate.run(model, {
            input
        });

        const imageArrayBuffer = Buffer.from(output, "base64").buffer;
        return Buffer.from(imageArrayBuffer);
    }
}

export {
    ImageProcessor
};