const {Web3} = require("web3");
const express = require("express");


const app = express();
const port = 4000;

// Connect to the Quorum node
const web3 = new Web3('http://172.20.2.139:22004');
 


// Endpoint to fetch node information
app.get('/nodeInfo', async (req, res) => {
    try {
        // Get node information
        const nodeInfo = await web3.eth.getNodeInfo();
        res.json({ success: true, nodeInfo });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// const express = require("express");
// const Web3Quorum = require("web3js-quorum");

// const app = express();
// const port = 3000;

// // Connect to the GoQuorum node
// const providerUrl = "http://172.20.2.139:22004"; 
// const web3 = new Web3Quorum(providerUrl);

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

// const express = require("express");
// const Web3Quorum = require("web3js-quorum");
// const { Web3 } = require("web3");

// const app = express();
// const port = 3000;

// // Connect to the GoQuorum node
// const providerUrl = "http://172.20.2.139:22004"; 
// const inputDefaultBlockNumberFormatter = Web3.utils.formatters.inputDefaultBlockNumberFormatter;
// //const web3 = new Web3Quorum(providerUrl);
// const web3 = new Web3Quorum(new Web3("http://172.20.2.139:22001"));
// //const web3 = new Web3("http://172.20.2.139:22004");
// //const web3 = new Web3('http://172.20.2.139:22004');


// // Endpoint to fetch permissioned node list
// app.get("/permissionedNodeList", async (req, res) => {
//     try {
//         // Get permissioned node list
//         const permissionedNodeList = await web3.quorumPermission.getNodes();

//         res.json({ success: true, data: permissionedNodeList });
//     } catch (error) {
//         console.error("Error retrieving permissioned node list:", error);
//         res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require("express");
// const Web3Quorum = require("web3js-quorum");
// const {Web3} = require("web3");

// const app = express();
// const port = 3000;

// // Connect to the Quorum node
// const providerUrl = 'http://172.20.2.139:22004'
// const web3 = new Web3Quorum(new Web3('http://172.20.2.139:22004'));

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
