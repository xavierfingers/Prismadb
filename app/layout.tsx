// layout.tsx
import { PrismaClient } from '@prisma/client';
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const [d] = await sql`CREATE TABLE able(id int, name varchar(255), age int);`
async function database(ref: Request, ctx: any) {
	const postId = parseInt(new URL(req.url).searchParams.get('postId'))
          if(postId === NaN) {
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
<p>Thanks</p>
	 </body>
</html>
  )
} 
