export const createUrl = async (req, res) => {

    const { title } = req.params
    const { utmi_cp, utmi_pc, utmi_p, map, order } = req.query

    if (!title) return res.status(400).json({ mesage: "title is required" });
    if (!utmi_cp) return res.status(400).json({ mesage: "label is required" });
    if (!utmi_pc) return res.status(400).json({ mesage: "utmi_pc is required" });
    if (!utmi_p) return res.status(400).json({ mesage: "utmi_p is required" });

    const urlFinal = `https://www.rihappy.com.br/${title}?${map}${order}${utmi_cp}${utmi_p}${utmi_pc}`

    return res.status(200).json({ urlFinal })
    // return res.redirect(urlFinal)
}

export const carusel = async (req, res) => {

    const { title } = req.params
    const { utmi_cp, utmi_pc, utmi_p, map, order } = req.query
    // let position = 01
    if (!title) return res.status(400).json({ mesage: "title is required" });
    if (!utmi_cp) return res.status(400).json({ mesage: "label is required" });
    if (!utmi_pc) return res.status(400).json({ mesage: "utmi_pc is required" });
    if (!utmi_p) return res.status(400).json({ mesage: "utmi_p is required" });

    const urlFinal = `https://www.rihappy.com.br/${title}?${map}${order}${utmi_cp}${utmi_p}${utmi_pc}${position}`

    return res.status(200).json({ urlFinal })
    // return res.redirect(urlFinal)
}
// "www.rihappy.com.br/dia-dos-namorados?utmi_cp=dia_dos_namorados&utmi_p=home_ri_happy&utmi_pc=banner_destaque"
// "https://www.rihappy.com.br/produtos-importados?utmi_cp=produtos_importados&utmi_p=home_ri_happy&utmi_pc=banner_grid"