import React, { useEffect, useState } from 'react'
import api from '../Utils/api';
import { Helmet } from "react-helmet";

const BrandSEOTEST = () => {
    const [seoData, setSeoData] = useState(null);

    const fetchSEOofBrand = async () => {
        try {
            console.log("this running...")
            // const response = api.get('/sell-module/user/resolve-brand-or-product/sell-old-test-deletion');
            const response = await api.get('/common-module/FetchbrandByCatSelection?option=Sell&categoryId=68cba28f7bd932d80fa76ec2');
            setSeoData(response.data?.data[0]?.seo?.Sell)
            console.log("response of brand SEO : ", response)

        } catch (error) {
            console.error("error in fetching brand SEO : ", error)
        }
    }

    useEffect(() => {
        fetchSEOofBrand();
    }, [])

    console.log("main sell seo of brand ", seoData)
    const description = 'hello this is for description'
    const seoh1 = 'this is h1 tag for brand seo'

    return (
        <>

            <div>BrandSEOTEST</div>
            {seoData && (
                <Helmet>
                    {seoData.title && <title>{seoData?.title}</title>}
                    {seoData.description && (
                        <meta name="description" content={seoData?.description} />
                    )}
                    {seoData.footer && <meta name="footer" content={seoData?.footer} />}
                    {seoData.title && (
                        <meta property="og:title" content={seoData?.title} />
                    )}
                    {seoData.description && (
                        <meta property="og:description" content={seoData?.description} />
                    )}
                    {seoData.headings?.h1 && (
                        <meta name="h1" content={seoData?.headings?.h1} />
                        // <meta name="h1" content={seoData.} />
                    )}
                    {seoData.others?.map(
                        (item, index) =>
                            item?.type &&
                            item?.text && (
                                <meta
                                    key={index}
                                    name={item?.type.toLowerCase()}
                                    content={item?.text}
                                />
                            )
                    )}
                </Helmet>
            )}
        </>
    )
}

export default BrandSEOTEST