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
- Create a binding for retrieval
```[CosmosDB(databaseName:"azureresumejn", collectionName:"Counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1")] Counter counter```
- Create a binding for updating
```[CosmosDB(databaseName: "azureresumejn", collectionName: "Counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] out Counter updatedCounter```
- Test locally after adding CORS hosting to secret file to work with the localhost and adding the function API to the frontend js script before launching HTML path

PHASE 3
- Deploy Azure Function to Azure, then update the js code
- deploy to Blob Container
- Azure CDN for HTTPS connection along with custom URL
