import 'dotenv/config'
import app from './app'
import { PORT } from './config'

app.listen(PORT, () => {
  console.info(`server listening on ${PORT}`)
})
