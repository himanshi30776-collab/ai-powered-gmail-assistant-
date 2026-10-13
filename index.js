
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "gmail-assistant",
  version: "1.0.0"
});

server.tool(
  "gmail_status",
  "Check whether the Gmail assistant server is running",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: "Gmail MCP server is running. Gmail authorization is not configured yet."
      }
    ]
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
