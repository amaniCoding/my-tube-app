'use client'
import Image from "next/image"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { PiThumbsUpThin, PiThumbsDownThin } from "react-icons/pi"
export default function Comment() {
  return (
    <>
      {
        dummyText.map((el, i) => {
          return (
            <div className="flex space-x-4 mb-8" key={i}>
              <Image
                src={`/tube/${61 - (i + 1)}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-9 h-9 block rounded-full"
                alt="You tube like app developed by Amanuel Ferede"
              />
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3">
                  <span className="font-bold">@{el.name}</span>
                  <span className="" style={{color: '#626262'}}>{el.time} ago</span>
                </div>
                <span className="w-full">{el.comment}</span>
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <PiThumbsUpThin  size={20} />
                    <span className="" style={{color: '#626262'}}>{el.views}</span>
                  </div>
                  <span> | </span>
                  <div className="flex space-x-1">
                    <PiThumbsDownThin size={20} />
                    <span className="" style={{color: '#626262'}}></span>
                  </div>
                  
                </div>
                <div className="ml-5 my-5">
                    <div className="flex items-center space-x-3">
                      <MdOutlineKeyboardArrowDown />
                      <Image
                        src={`/tube/${i+1}.jpg`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className={`w-6 h-6  object-center rounded-full ${el.hasOwnerReply ? 'block' : 'hidden'}`}
                        alt="You tube like app developed by Amanuel Ferede"
                      />
                      <span><span className="text-blue-600 font-semibold">{el.reply} reply{el.reply === '1' ? '': 's'}</span></span>
                    </div>
                  </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}

const dummyText = [
  {
    comment: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    name: 'Most Piano',
    views: '100',
    time: '1 minute ago',
    reply: '20',
    hasOwnerReply: true,

  },
  {
    comment: 'Two assure edward whence the was. Who worthy yet ten boy denote wonder. ',
    name: 'CBC News',
    views: '234',
    time: '1 minute ago',
    reply: '6',
    hasOwnerReply: false,

  }, {
    comment: 'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs.',
    name: 'Anchor Media',
    views: '25',
    time: '2 days ago',
    reply: '23',
    hasOwnerReply: true,

  }, {
    comment: 'Is branched in my up strictly remember. Songs but chief has ham widow downs.',
    name: 'Negash Media',
    views: '333k',
    time: '2 hours ago',
    reply: '203',
    hasOwnerReply: false,

  }, {
    comment: 'Indulgence announcing uncommonly met she continuing two unpleasing terminated.',
    name: 'Seyifu On Ebs',
    views: '294',
    time: '10 hours ago',
    reply: '33',
    hasOwnerReply: true,

  }, {
    comment: 'Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.',
    name: 'Donkey Tube',
    views: '72k',
    time: '22 hours ago',
    reply: '9',
    hasOwnerReply: false,

  }, {
    comment: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything.',
    name: 'Chiristian Story',
    views: '264',
    time: '12 hours ago',
    reply: '66',
    hasOwnerReply: false,

  }, {
    comment: 'On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. ',
    name: 'Bible World',
    views: '75k',
    time: '19 hours ago',
    reply: '75',
    hasOwnerReply: false,

  }, {
    comment: 'Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature.',
    name: 'CNN',
    views: '157k',
    time: '2 hours ago',
    reply: '36',
    hasOwnerReply: false,

  },
  {
    comment: 'Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do.',
    name: 'Fana Meznagna',
    views: '242',
    time: '21 hours ago',
    reply: '89',
    hasOwnerReply: false,

  }, {
    comment: 'Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led offending.',
    name: 'Ruha Tube',
    views: '78k',
    time: '22 hours ago',
    reply: '96',
    hasOwnerReply: false,
 
  }, {
    comment: 'In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove.',
    name: 'Abysinia Gamer',
    views: '178',
    time: '2 minutes ago',
    reply: '25',
    hasOwnerReply: false,
  }, {
    comment: 'Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. ',
    name: 'Amani Coding',
    views: '34',
    time: '2 days ago',
    reply: '',
    hasOwnerReply: false,
  }, {
    comment: 'IHim boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an.',
    name: 'Top Tube',
    views: '19',
    time: '2 years ago',
    reply: '',
    hasOwnerReply: false,

  }, {
    comment: 'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.',
    name: 'Movies World',
    views: '50',
    time: '2 days ago',
    reply: '',
    hasOwnerReply: false,

  }, {
    comment: 'Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face.',
    name: 'Sala Relax Music',
    views: '52',
    time: '1 hour ago',
    reply: '2',
    hasOwnerReply: false,

  }, {
    comment: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at.',
    name: 'The Shark Band',
    views: '82',
    time: '12 days ago',
    reply: '',
    hasOwnerReply: false,

  }, {
    comment: 'Literature admiration frequently indulgence announcing are who you her. Was least quick after six. ',
    name: 'Funny Moments',
    views: '26',
    time: '22 days ago',
    reply: '1',
    hasOwnerReply: false,

  }, {
    comment: 'Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her.',
    name: 'Divine Music',
    views: '37',
    time: '9 years ago',
    reply: '',


  }, {
    comment: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. ',
    name: 'Tana Entertainment',
    views: '27',
    time: '2 minutes ago',
    reply: '',
    hasOwnerReply: false,

  }, {
    comment: 'Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled.',
    name: 'Mr Bean',
    views: '82',
    time: '2 days ago',
    reply: '',
    hasOwnerReply: false,
  },

]