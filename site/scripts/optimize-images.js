const { Jimp } = require('jimp')
const path = require('path')

const files = [
  { src: 'src/assets/profile.jpg', name: 'profile' },
  { src: 'src/assets/fullstack_screenshot.png', name: 'fullstack_screenshot' },
  { src: 'src/assets/share_car_banner.jpg', name: 'share_car_banner' }
]

async function run(){
  for(const f of files){
    try{
      const img = await Jimp.read(f.src)
      // create 400px wide and 800px wide variants, preserving aspect
      const sizes = [400, 800]
      for(const w of sizes){
        const clone = img.clone()
        clone.resize(w, Jimp.AUTO)
        const ext = path.extname(f.src)
        const out = path.join(__dirname, '..', 'src', 'assets', `${f.name}-${w}${ext}`)
        await clone.quality(78).writeAsync(out)
        console.log('Wrote', out)
      }
    }catch(err){
      console.error('Error processing', f.src, err.message)
    }
  }
}

run().catch(e=>{ console.error(e); process.exit(1) })
