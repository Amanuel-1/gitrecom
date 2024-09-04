import { Pinecone } from "@pinecone-database/pinecone";
import { generateEmbedding } from "./vector";

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
export async function upsertEmbeddings(indexName: string, embeddings: number[][], metadata: any[]) {
    const upserts = embeddings.map((embedding, index) => ({
      id: `repo-${index}`,
      values: embedding,
      metadata: metadata[index],
    }));
  
    const index = pinecone.index(indexName);
  
    await index.upsert(upserts);
  }

export async function resetIndex(indexName: string) {
    await deleteIndex(indexName);
    await createIndexIfNecessary(indexName);
  }
  
  async function deleteIndex(indexName: string) {
    await pinecone.deleteIndex(indexName);
  }
  
  export async function createIndexIfNecessary(indexName: string) {
    await pinecone.createIndex({
      name: indexName,
      // The voyage-law-2 model has a dimensionality of 1024
      dimension: 1024,
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1',
        }
      },
      waitUntilReady: true,
      suppressConflicts: true
    });
  }
  
  export async function pineconeIndexHasVectors(indexName: string): Promise<boolean> {
    try {
      const targetIndex = pinecone.index(indexName)
  
      const stats = await targetIndex.describeIndexStats();
  
      return (stats.totalRecordCount && stats.totalRecordCount > 0) ? true : false;
    } catch (error) {
      console.error('Error checking Pinecone index:', error);
      return false;
    }
  }
  
  export async function pineconeIndexExists(indexName: string): Promise<boolean> {
    try {
      const { indexes } = await pinecone.listIndexes();
  
      // Check if index already exists
      const indexNames = (indexes && indexes.length ? indexes.map(index => index.name) : []);
  
      if (!indexNames.includes(indexName)) {
        return false;
      }
  
      return true
  
    } catch (error) {
      console.error('Error checking Pinecone index:', error);
      return false;
    }
  }




  export const queryPipecone = async (query:string,indexName:string,topK:number)=>{
      const index = pinecone.index(indexName);
      const queryVector = (await generateEmbedding(query)).embedding.values;
      const queryResponse = await index.query({
        vector: queryVector,
        topK,
        includeMetadata:true
      })

      return queryResponse.matches;

  }