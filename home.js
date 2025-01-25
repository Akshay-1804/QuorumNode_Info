// const {Web3} = require("web3");
// const Web3Quorum = require("web3js-quorum");
// const web3 = new Web3Quorum(new Web3("http://172.20.2.139:22001"));

// web3.priv.generateAndSendRawTransaction(options);

// const app = express();
// const port = 3000;

// // Endpoint to fetch node information
// app.get("/nodeInfo", async (req, res) => {
//     try {
//         // Get node information
//         const nodeInfo = await web3.admin.nodeInfo();

//         res.json({ success: true, data: nodeInfo });
//     } catch (error) {
//         console.error("Error retrieving node information:", error);
//         res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const quorumNodeUrl = "http://172.20.2.139:22001"; 

// Endpoint to fetch permissioned node list
app.get("/permissionedNodeList", async (req, res) => {
    try {
        // Make JSON-RPC request to Quorum node
        const response = await axios.post(quorumNodeUrl, {
            jsonrpc: "http://172.20.2.139:22001",
            method: "quorumPermission_nodeList",
            id: 10
        });

        // Extract permissioned node list from response
        const permissionedNodeList = response.data.result;
        

        res.json({ success: true, data: permissionedNodeList })
    } catch (error) {
        console.error("Error fetching permissioned node list:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
