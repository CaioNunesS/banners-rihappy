function createUrl(url, final){
    const urlFinal = `https://www.rihappy.com.br/${url}&utmi_p=home_ri_happy&utmi_pc=${final}`

    return urlFinal
}

console.log(createUrl("dia-dos-namorados?utmi_cp=dia_dos_namorados", "banner_destaque"));