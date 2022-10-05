import createClient from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset : "production",
    projectId : "wmn77imy",
    apiVersion: '2021-08-31',
    useCdn: true,
}

export const client = createClient(config)


export const urlFor = (source) => createImageUrlBuilder(config).image(source);