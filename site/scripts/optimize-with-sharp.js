const sharp = require('sharp')
const path = require('path')

const files = [
  { src: 'src/assets/profile.jpg', name: 'profile' },
  { src: 'src/assets/fullstack_screenshot.png', name: 'fullstack_screenshot' },
  { src: 'src/assets/share_car_banner.jpg', name: 'share_car_banner' }
]

async function run(){
  for(const f of files){
    try{
      const input = path.join(process.cwd(), f.src)
      const ext = path.extname(f.src)
      const outDir = path.join(process.cwd(), 'src','assets')
      const sizes = [400, 800]
      for(const w of sizes){
        const out = path.join(outDir, `${f.name}-${w}${ext}`)
        await sharp(input).resize({ width: w }).jpeg({quality:78}).toFile(out)
        console.log('Wrote', out)
      }
    }catch(err){
      console.error('Error processing', f.src, err.message)
    }
  }
}

run().catch(e=>{ console.error(e); process.exit(1) })
