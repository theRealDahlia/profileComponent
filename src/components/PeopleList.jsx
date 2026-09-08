import felix from '../assets/felix.png'
import heidi from '../assets/heidi..png'



export function PeopleList(){
    const felixPic = felix
    const heidiPic = heidi

    const peopleList = [
        {
            firstName:'Felix',
            lastName:'Turbowitz',
            userName:'@dontshakemysalt',
            profession:'Exotic Arms Dealer',
            profilePic:felixPic,
        },
         {
            firstName:'Heidi',
            lastName:'Kraemer',
            userName:'@bungaloShampew8)', 
            profession:'Wild Hampster Tamer',
            profilePic:heidiPic,
        }
    ]


    const profileCard = peopleList.map((person) => {

    })
}