PHASE 1 - Aesthetics - FrontEnd
- First things first was updating the aesthetics.
  While I don't have a great desire to  guy, so i left the format and added my
  details. Also changed up some symbols, added a email me.
- Next, wrote main.js that will become the element the element that displays the visit counter

PHASE 2 - Engineer the Backend
- Deply a new CosmosDB Serverless DB
- serverless event driven code - binding connects resources to .NET3 functions
- test run
```func host start```
- Add WebJobsStorage pakcage to run with CosmosDB
```dotnet add package Microsoft.Azure.WebJobs.Extensions.CosmosDB --version 3.0.10```
- Add connectionstring to local file and created DB bindings in Counter.cs
- Create a binding for retrieval and updating
- Test locally after adding CORS hosting to secret file to work with the localhost and adding the function API to the frontend js script before launching HTML path

PHASE 3
- Deploy Azure Function to Azure w/i VS Code
- In Functions App, update the connection string, then update the js code with API Url
- deploy to Blob Container w.i vsc with Azure Stoage Extension - Upgrade Storage Account to V2
- Cloudflare CDN, SSL and Custom domain, update Function Cors
- Git Actions

