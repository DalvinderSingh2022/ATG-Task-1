import React from 'react'
import Post from './Post';
import LocationSection from './LocationSection';

const PostSection = ({ props }) => {
    return (
        <div className='PostSection'>
            <div className="posts flex col">
                <Post
                    image="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1704067200&Signature=bnwqmi40SGRxztsnyI3mYfEcsNchGJwDeN3K-mRHDacl-7UJSM2belDGBcBKhNRqQGYM~k7EA4WiWlaYX0nBpI8XO8BcuslZGRokXT3FfitAytKCcXDwq2xR0UFEjIA2o0ELi4qn6mEvDimyHWU~HBsEm8BH07gpkkysNaaF993rLOEekWayIdP6HZJ15Ta2A9SmgqLr1SaHzcXwdPVPZpZAJ5x5ztq0i7C5e9hZ24QnbIRpi2b3mQhjPAYV400sinbA~8dIaHDxrfvIHCUhTcwTfR2IlADi4Ut9FvGma0dT0PI-sBRMIaFcSFVyVbgBtBYBT5kUvXEfc--8IX~khg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    type="✍️ Article"
                    heading="What if famous brands had regular fonts? Meet RegulaBrands!"
                    userImage="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1704067200&Signature=SaimydIYUg--n83mJEtQ5OqBQ0AOLk0PPWBZ5yGvsWpsfopMN18V9Oyph7xpAJ463IDZ-U3b5Xa7ykhuI7GCiT9PX8kAXGHoj14b5dP~L8G50ejAIAOcBjEAkx0NvQQ9EDZ6nzser11G6kESxo3tfQcZm2eOb1cLzM0ES6KvD2qTtgll57iQeL7iVFol6oXS65RC36zocr98HloeK70ybMuvVRENRjyWoZ8lF5~ZAwrxAAXCWQM6v7qKc6YEdycfdzQPToqEktHp5rBKy6XdmFj-UTkekZM43rXOvAM2fW6rnDsIxUQrtDQk~R4V9wIrn7TF09zJ0QUjtAKjq2Bwew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    userName="Sarthak Kamra"
                    views="14k"  >
                    <div className="detail">I’ve worked in UX for the better part of a decade. From now on, I plan to retrieve</div>
                </Post>
                <Post
                    image="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1704067200&Signature=nJDVhI95oYZGL7S3LHfr1skf676hn-BI1FW8d6QTr3X2ZSrJsH09GR5lG8lN8f3~r~fZ5avMryPVd6Djf89iKxjgZWQ2cvCcQHxKXF~0QAJksv3mv4cJMCzvOn4bqvpq6Zf7-ChDtsjrKlY5CbVON-jOoFJ5i4SKqgSN8iK23glpSnYuiqIM3IV03LykPZp4B-Nj68FKXzXgsHNOhdXek-0wqtCYE3KvhRhA1q6eyL5xH3Z5jZP8fnyV5QdoXpP5-a4ty~Z~cN1bwZR7YXDclZyMglHJ1l8KVsLcsr9qfgElSRlmdhtVxwerATgH-GScVkG0-8NP8ffFo~WQGyMYLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    type="🔬️ Education"
                    heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
                    userImage="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1704067200&Signature=YXAjpWhE-tdL1HVXH6rSjxmhmiQIKfEQRLySmdcKYcmQ4xhCue5y4TC7L9kcuTNnL837aoU42XE8l6T5RetN1GWSrWsnXtr4W9EPeq6PaU9IPeKlJCC8Ecrptizhk3RdUMU1mA~Cde5WtXFyoqhQuJzJ3RSQbck~KXuoRAoEtRGCS-9c5LVir1Tt5kCRLB8mxmNn0WB5WfAuklyqxaKjpxX9lgZj7jorkKFgSNs9aJIAasx6bYRdNwlRibYOV23pMRMU7m6oGtMN4o4cCR9WVRz3LPyA10qrC8s7tf2dtCV7o1Fe~0azcxbsW1NbZ2hz1J68EMlKU97HIM5iq9lj4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    userName="Sarah West"
                    views="1.4k"  >
                    <div className="detail">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
                </Post>
                <Post
                    image="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1704067200&Signature=K9tQBTCDIC-BBfxbDfTRHamuiXxeZ3bkCfuS0e0MSjkeZ-pfWs0ymqNcsuR7O2LCcEHIpxpc7gkxGbNLvx6BwOTpIPdES3gJJrJ7kCHtagSop-GERPrjxZwpSHyEnC3SU-ZyDLqEdAKmMGGtJ1r3GJMfPC1snbdcMQgklciC3~uplsCIWBfozk9QFsI2wa17qVsy7cjlgDfAFohabvxp2OZ5AEbSh-ULVyx3bvBMF-L3NxE2xfAwms4i7lcPWUFlZhvVI7RoUDIpuXNgy-bTp01Gk7YA27m7LSdkEReISeOMNMOVaJM1Bjay-51sp6ZQ0e2~59jObzEJ9kOXAVYfCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    type="🗓️ Meetup"
                    heading="Finance & Investment Elite Social Mixer @Lujiazui"
                    userImage="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1704067200&Signature=pfuK3zXljauBxGLNa6L5pZI1vlGn~jlaUhRg9URHuACHb4zsYTq02JY9gqJ~CVgJ1cWhazN7pK73qO7We-g9raSX79l4kMdp0fFuxhwn9LLaFyHERift1YAQyDH7UekxLGD2j3aOOQ3pDrQ2LX~Vju~JIeMd1x~fL8f4GmDeXlVq2WHHvbHP4igkm5BeG0JXntgfhqwsXxRE8kcTyc1QANIzKtwuG6xR5y8qlLYQzPP3FjFJehsC7S5WYtcHNBinLwBWCxWpxRcCEHgeInIfD55BW10IL-UXQz95CE~nbo6LKfnGB6gTd2diFl6qPWAlOrAFJax7QuQ0v~yLLPWKWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    userName="Ronal Jones"
                    views="1.4k"  >
                    <button className="link visit">Visit Website</button>
                </Post>
                <Post
                    type="💼️ Job"
                    heading="Software Developer"
                    userImage="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1704067200&Signature=mTDlGRlsfIJG1RZ1c~13d2wH3s7cx3nhK~55p4qRGoCaFDlgyQKbGHvS7ibveJYchdvFjkd6zHFJeN-Q6dLoTaF4BzL2HWV50VmCe2QeQK30zKyydDSvW4lfRGc8S4T7a0XQXNWlZ1mj0dJCwp2K3Qh29XwHu2cK5KibWs4bWay~4fTeA2pUambGlwk~VmidzYpXWfUS4vb3RYZCsZHXWtpv0NeSqBUG50p~uUg2YbafxCQHT3wCpAuUC~CZoh3eZzyz-~F~HGcZLtapAImj292C9vv9Vw6PhiOdQ-PwCJZzi1KN86i4UdiutDpSn7ky9W6nejkHyZLCZwlG-CLM9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    userName="Joseph Gray"
                    views="1.4k"  >
                    <button className="link">Apply on Timesjobs</button>
                </Post>
            </div>
            <LocationSection props={{ ...props }} />
        </div>
    )
}

export default PostSection;