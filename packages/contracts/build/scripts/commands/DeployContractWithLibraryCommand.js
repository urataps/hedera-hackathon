"use strict";
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
class DeployContractWithLibraryCommand {
    name;
    signer;
    libraries;
    args = [];
    constructor({ name, signer, args = [], libraries, }) {
        this.name = name;
        this.signer = signer;
        this.args = args;
        this.libraries = libraries;
    }
}
exports.default = DeployContractWithLibraryCommand;
