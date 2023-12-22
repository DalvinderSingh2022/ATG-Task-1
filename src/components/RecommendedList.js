import React from 'react'
import ListItem from './ListItem';

const RecommendedList = () => {
    return (
        <div className='recommended'>
            <div className="heading flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_1_1263)">
                        <path opacity="0.3" d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z" fill="black" />
                        <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1263">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h1>Recommended Groups</h1>
            </div>
            <div className='list flex col'>
                <ListItem
                    name="Leisure"
                    image="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1704067200&Signature=X1NSCT~1bEfQe2hD~QNjtTaD7vda7ESNhvu7PvA15-WNoAj4V5yeTuJmZua1CIfz4ASTOBOAYhXfaH1Ui7qHHapcoAOqGFz20FF~kHPR70Agr-iKtn6gznkFi3VsD-tEyPRaPee0cU4pP15qzW76ahRLHtvV4~ahksn2JUPZRUo37wP4glbAPzWxzDu9GT~pcv3jXtd7LVsiKTXqcGZI~oXZyJSIR2DkYEFakaqxMccvZXMiITDTvuc0jHGWK4LxK1fLgBUoi0RJWMmnTpjEYIsLo~4UX6tiwKAsTyVcEalCym2PwIW~2JRY9gaLu5tjbazLKA6sNKTSHY3ADQzqsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <ListItem
                    name="Activism"
                    image="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1704067200&Signature=dPYPB~KM2gMImMUQKM4W2tQ~CCG2jIMj3SEQ4zj0YC5IwBc6kkaiLyMP-rF4aT2kF3Iu51N3kISaHQc7JRSuZDByQanhlf5oJOjPuFWMSCx0UeySiH8HFTju2QdJULjZ6rUcpFsOIBrX7vNjXMpKCOOP9gbsOunt6XGMxoHm~ZuHOuWYK5QNa1HOn0v9lsZdpYqj7wy5aBktuSEaiV4eTz~U1o6o27A1EIKDMJPRMGl-xRUF~3i3GAUAUKsWlxDkYD3U12Q5OAAyy~~nRIIAGmS7rM7I7nsoG-9yF~vftoHQF7q85F~CFD2op~tVHokrRnxDajul12uyEirj7i0XeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <ListItem
                    name="MBA"
                    image="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1704067200&Signature=MxHSHFjHwrTswhnk002t0La2Ni~p1QyINyOYTrnO3n-CCB88w1HCf5YQWnDctZ2NA7XOvfT72POL3xbH4TYuIWXqsPy58~qRSePO6Y2g1DxWFh35bgNZHI31pkPSGOlxsx4ownUQgSpuuqq6KnRqm5g9S0hXYwZIMln7brOMUDS-xEomPC~9PcJGI30ZgDzfPKGcInDZLnFCWVTIxDdQaL6qfFpMrLOjVd-IAC8QAXe2F9zbp3TuVU5gBf-nqcNmZGMeeiXWil6G18szpDJw0xQvQX9ZB8Il20Zv4Y50ZSc2ObqBzsmKQXSXvRhO9OO9PrZoFOXh6Lm-W2OR9yvFpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <ListItem
                    name="Philosophy"
                    image="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1704067200&Signature=NzSnYKCa8LXpNp-FIM-jSi1ltAs2QYUbDGIoftN-nW6zOrfU6OMt9dqA4hnpL53wIK9phAftINoImQeFrX-ELoruhVM7hr1EIqkrPCcSZUgpy3YjPmgJh0Rmts3aA6hhY7mEqcY5glZhfnOIXqEGJlAGTkaSo~jVeyG3nMYJgozkjftsa5TudvZSDxaBY8u8RBzDY14pzbwGBdOUeZKGxEsJDzgL06SQlZvTsv54nRuGDAY2MoEqbpx2Jn3NRHSAXwmBHdzdkje0lXK~cOD0TVi8xfBiLgqDNZdp07~pvXRXZNh8012jEBLVtIymXelmsuRdC8sua9BNSI6P7~p7kw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
            </div>
            <span className="link" >See More...</span>
        </div>
    )
}

export default RecommendedList;
