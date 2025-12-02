import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/typeDef';
import { resolvers } from '../../graphql/resolvers';

// 1. ApolloServer 인스턴스 생성
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 2. 서버 시작 Promise 미리 만들어두기
const startServer = server.start();

// 3. Next.js API Route 핸들러
export default async function handler(req, res) {
  // CORS 설정 (Apollo Studio에서 로컬 서버 접근용)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');

  // preflight(OPTIONS) 요청 처리
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  // Apollo Server 준비
  await startServer;

  // 실제 GraphQL 요청 처리
  return server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

// 4. Next.js bodyParser 비활성화 (Apollo에서 직접 파싱)
export const config = {
  api: {
    bodyParser: false,
  },
};
