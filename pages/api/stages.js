// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import stages from "./stages.json"

export default (req, res) => {
  res.status(200).json(stages)
}
