import { NextApiResponse } from "next"

export default  (req, res: NextApiResponse) => {
  res.setPreviewData({})
  if(req.query.response) {
    res.redirect(req.query.route)
  } else {
    res.redirect('/')
  }

}