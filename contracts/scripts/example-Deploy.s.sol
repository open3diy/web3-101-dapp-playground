// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/MiContrato.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();
        
        MiContrato contrato = new MiContrato();
        
        vm.stopBroadcast();
    }
}
