import { User } from "./models/User"

const user = new User({ name: "Dylan", age: 32 })

user.on('change', ()=>{
  console.log('Change 1')
})
user.on('change', ()=>{
  console.log("change 2 ")
})
user.on('save', ()=>{
  console.log('Save Triggered')
})

user.trigger('change')
user.trigger('save')
user.trigger('Random')