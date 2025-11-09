// layout.tsx
import { Analytics } from '@vercel/analytics/next';
import { PrismaClient } from '@prisma/client';
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const [d] = await sql`INSERT INTO able(name) values (1)`
async function database() {
	const postId = parseInt(new URL("postgresql://neondb_owner:npg_2MSZcvo5afDF@ep-billowing-bush-ah4p6l9k-pooler.c-3.us-east-1.aws.neon.tech/neondb").searchParams.get('postId'))
          if(Number.isNaN(postId)) {
	    return new DOMException('400 Bad request');
	}
}
	const prisma = new PrismaClient()
async function main() {
     database();
  const newPost = await prisma.post.create({
    data: {
      title: 'Integrating Neon',
      content: 'Using Prisma with Neon serverless Postgres.',
    },
  })
  console.log('Created new post:', newPost)
	
} 
function call() {
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
 })
}
export default function RootLayout() {
	return (
      <html>
	 <body>
	<h1>Hello</h1>
	<title>Neon Demo</title>
        <button onClick={call()}>Click</button>
<p>Thanks</p>
	 </body>
        <Analytics/>
</html>
  )
} 
