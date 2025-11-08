// index.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
async function main() {
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
