"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.transaction = exports.state = exports.StateModule = void 0;
const stateModule_1 = require("./module/stateModule");
Object.defineProperty(exports, "StateModule", { enumerable: true, get: function () { return stateModule_1.StateModule; } });
const decorators_1 = require("./module/src/decorators");
Object.defineProperty(exports, "state", { enumerable: true, get: function () { return decorators_1.state; } });
const appolo_state_cluster_1 = require("appolo-state-cluster");
Object.defineProperty(exports, "transaction", { enumerable: true, get: function () { return appolo_state_cluster_1.transaction; } });
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return appolo_state_cluster_1.Store; } });
//# sourceMappingURL=index.js.map