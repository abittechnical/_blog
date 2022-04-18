import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function blogData() {
  const blogDirFiles = fs.readdirSync(path.join('content/blog'))
  const blogs = blogDirFiles.filter(f => f.includes('.md'))

  const posts = blogs.map(filename => {
    const slug = filename.replace('.md', '')
    const dirFileContents = fs.readFileSync(
      path.join('content/blog', filename),
      'utf8'
    )

    const { data: frontMatter } = matter(dirFileContents)

    return {
      slug,
      frontMatter,
    }
  })

  return `export const posts = ${JSON.stringify(posts)}`
}

try {
  fs.readdirSync('cache')
} catch (error) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.ts', blogData(), function (err) {
  if (err) return console.log(err)
  console.log('Blog Posts Cache Complete')
})
