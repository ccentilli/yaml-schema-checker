import fs from "fs";
import path from "path";
import process from "process";
import { glob } from "glob";
import StringUtils from "./string-utils";

class FileUtils {

    static isWorkspaceEmpty() {

        return FileUtils.isEmpty(FileUtils.getWorkspacePath());
    }

    static getWorkspacePath() {

        return process.env["GITHUB_WORKSPACE"] || "";
    }

    static exists(fileOrPath) {

        return fs.existsSync(fileOrPath);
    }

    static searchFiles(pattern) {

        const options = {
            cwd: FileUtils.getWorkspacePath()
        };

        return glob.sync(pattern, options);
    }

    static isEmpty(path) {

        if (!FileUtils.exists(path)) {
            throw new Error(`${path} does not exist`);
        }

        return fs.readdirSync(path).length === 0;
    }

    static getContent(file, encoding = "utf-8") {

        const filePath = path.join(FileUtils.getWorkspacePath(), file);

        return fs.readFileSync(filePath, { encoding });
    }

    static getContentFromJson(file, encoding = "utf-8") {

        const content = FileUtils.getContent(file, encoding);

        return StringUtils.parseJson(file, content);
    }

    static getContentFromYaml(file, encoding = "utf-8") {

        const content = FileUtils.getContent(file, encoding);

        return StringUtils.parseYaml(file, content);
    }
}

export default FileUtils;
