QuorumNode_Info
Overview
QuorumNode_Info is a Node.js application designed to interact with a Quorum blockchain network. Quorum is an enterprise-focused version of Ethereum, offering enhanced privacy and performance features suitable for business applications.

 It provides functionalities to retrieve and display information about the Quorum node, such as its status, peers, and other relevant metrics. This tool is particularly useful for developers and administrators who need to monitor and manage Quorum nodes efficiently.

Features
Node Status Monitoring: Check the current status of the Quorum node, including synchronization status and block information.

Peer Information: Retrieve details about connected peers in the network.

Modular Design: Built with a modular architecture, making it easy to extend and integrate with other tools or dashboards.

Prerequisites
Node.js: Ensure that Node.js is installed on your system. You can download it from https://nodejs.org/.

Quorum Node: A running instance of a Quorum node that the application can connect to.

Installation
Clone the Repository:

git clone https://github.com/Akshay-1804/QuorumNode_Info.git
cd QuorumNode_Info


Install Dependencies:
npm install

Usage

Start the Application:
node index.js

Access the Application:
Once the application is running, you can access it via your browser at http://localhost:3000 (assuming the default port is 3000).

Project Structure
index.js: The main entry point of the application.

home.js: Contains the logic for handling routes and rendering the homepage.

package.json: Lists the project dependencies and scripts.

package-lock.json: Automatically generated for locking dependencies.

node_modules/: Directory containing installed Node.js modules.



