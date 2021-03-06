import { DConfig } from "@dendronhq/engine-server";
import { Uri } from "vscode";
import { VSCodeUtils } from "../utils";
import { DendronWorkspace } from "../workspace";
import { BasicCommand } from "./base";

type CommandOpts = {};

type CommandOutput = void;

export class ConfigureCommand extends BasicCommand<CommandOpts, CommandOutput> {
  async gatherInputs(): Promise<any> {
    return {};
  }
  async execute() {
    const wsRoot = DendronWorkspace.rootDir() as string;
    const configPath = DConfig.configPath(wsRoot);
    const uri = Uri.file(configPath);
    VSCodeUtils.openFileInEditor(uri);
  }
}
