'use client'
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMore } from "react-icons/ai"
export default function WatchList() {
  return (
    <>
      {
        dummyText.map((el, i) => {
          return (
            <div className="group " key={i} >

              <Link href={`/watch/2349873`}>
                <div className="relative">

                  <Image
                    src={`/tube/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full block relative md:rounded-xl group-hover:brightness-75 md:group-hover:rounded-none transition-all duration-200 ease-in-out"
                    alt="You tube like app developed by Amanuel Ferede"
                  />
                  <span className="bg-black/55 rounded-md text-sm text-white absolute right-2 bottom-2 py-[0.5px] px-1">{el.duration}</span>

                </div>
              </Link>



              <div className="flex space-x-2 my-2 md:pl-0 pl-4 ">

                <Image
                  src={`/tube/${62 - (i + 1)}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-8 h-8 rounded-full flex-none"
                  alt="You tube like app developed by Amanuel Ferede"
                />
                <Link href={`/watch/2349873`}>
                  <div className="w-full group">
                    <p className="font-semibold text-balance ">{el.title.substring(0, 50)}...</p>
                    <p className="" style={{ color: '#626262' }}>{el.channel}</p>
                    <div className="flex " style={{ color: '#777777' }}>
                      <p className="">{el.views} views .</p>
                      <p>{el.time}</p>
                    </div>
                  </div>
                </Link>
                <AiOutlineMore className=" rounded-full cursor-pointer flex-none p-2 active:bg-gray-200" size={42} />

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
    title: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    channel: 'Most Piano',
    views: '10k',
    time: '1 minute ago',
    duration: '1:20'
  },
  {
    title: 'Two assure edward whence the was. Who worthy yet ten boy denote wonder. ',
    channel: 'CBC News',
    views: '100k',
    time: '1 minute ago',
    duration: '4:20'
  }, {
    title: 'Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs.',
    channel: 'Anchor Media',
    views: '130k',
    time: '2 days ago',
    duration: '2:1:20'
  }, {
    title: 'Is branched in my up strictly remember. Songs but chief has ham widow downs.',
    channel: 'Negash Media',
    views: '333k',
    time: '2 hours ago',
    duration: '13:20'
  }, {
    title: 'And sir dare view but over man. So at within mr to simple assure.',
    channel: 'Feta SQUAD',
    views: '6.5k',
    time: '7 minutes ago',
    duration: '51:20'
  }, {
    title: 'His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural.',
    channel: 'Dr Chemist',
    views: '200k',
    time: '2 months ago',
    duration: '4:00'
  }, {
    title: 'Ignorant branched humanity led now marianne too strongly entrance.',
    channel: 'Dr Strage',
    views: '1.1k',
    time: '4 days ago',
    duration: '4:20:30'
  }, {
    title: 'Received overcame oh sensible so at an. Formed do change merely to county it.',
    channel: 'Mezmur Tube',
    views: '636k',
    time: '2 days ago',
    duration: '16:20'
  }, {
    title: 'Is education residence conveying so so. Suppose shyness say ten behaved morning had.',
    channel: 'Amani Tube',
    views: '1M',
    time: '1 day ago',
    duration: '2:20:22'
  }, {
    title: 'Indulgence announcing uncommonly met she continuing two unpleasing terminated.',
    channel: 'Seyifu On Ebs',
    views: '200k',
    time: '10 hours ago',
    duration: '1:30'
  }, {
    title: 'Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.',
    channel: 'Donkey Tube',
    views: '72k',
    time: '22 hours ago',
    duration: '1:18'
  }, {
    title: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything.',
    channel: 'Chiristian Story',
    views: '1.2k',
    time: '12 hours ago',
    duration: '4:18'
  }, {
    title: 'On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. ',
    channel: 'Bible World',
    views: '75k',
    time: '19 hours ago',
    duration: '1:18'
  }, {
    title: 'Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature.',
    channel: 'CNN',
    views: '157k',
    time: '2 hours ago',
    duration: '2:18:00'
  }, {
    title: 'Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat.',
    channel: 'MESKEL MEDIA',
    views: '160k',
    time: '10 days ago',
    duration: '1:18'
  }, {
    title: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay.',
    channel: 'Lucy Tips',
    views: '6k',
    time: '2 years ago',
    duration: '2:30'
  }, {
    title: 'Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.',
    channel: '20 Minute Hacks',
    views: '700k',
    time: '2 hours ago',
    duration: '1:00'
  }, {
    title: 'Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression.',
    channel: 'Travercy Media',
    views: '440k',
    time: '1 day ago',
    duration: '1:00:30'
  }, {
    title: 'Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant.',
    channel: 'Hulu Graphics',
    views: '510k',
    time: '1 month ago',
    duration: '56:18'
  }, {
    title: 'Ham followed now ecstatic use speaking exercise may repeated. Himself he evident oh greatly my on inhabit general concern.',
    channel: 'Code With Mosh',
    views: '810k',
    time: '5 months ago',
    duration: '40:18'
  }, {
    title: 'On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish.',
    channel: 'Belal Khan',
    views: '2M',
    time: '12 hours ago',
    duration: '3:18'
  }, {
    title: 'Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe.',
    channel: 'Max Tv',
    views: '3.1k',
    time: '13 hours ago',
    duration: '10:18:30'
  }, {
    title: 'Terminated principles sentiments of no pianoforte if projection impossible. Horses pulled nature favour number yet highly his has old.',
    channel: 'EBC',
    views: '239k',
    time: '17 hours ago',
    duration: '2:00:00'
  }, {
    title: 'Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. ',
    channel: 'EMS',
    views: '29k',
    time: '18 hours ago',
    duration: '1:18:33'
  }, {
    title: 'Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham.',
    channel: 'Fana Broadcast Network',
    views: '6.6k',
    time: '4 hours ago',
    duration: '1:18:00'
  }, {
    title: 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as.',
    channel: 'Hulu Media',
    views: '24k',
    time: '2 years ago',
    duration: '30:00'
  }, {
    title: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    channel: 'Spider Graphics',
    views: '55k',
    time: '7 hours ago',
    duration: '40:00'
  }, {
    title: 'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.',
    channel: 'Hulu Coding',
    views: '1k',
    time: '17 hours ago',
    duration: '1:30:00'
  }, {
    title: 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.',
    channel: 'Bete Amhara',
    views: '432k',
    time: '2 months ago',
    duration: '1:55:00'
  }, {
    title: 'Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages.',
    channel: 'TPLF Media',
    views: '130k',
    time: '2 years ago',
    duration: '1:24:00'
  }, {
    title: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    channel: 'Ethiopian Girls',
    views: '340k',
    time: '2 hours ago',
    duration: '8:35'
  }, {
    title: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her.',
    channel: 'Top Funny Videos',
    views: '1k',
    time: '3 hours ago',
    duration: '2:34'
  }, {
    title: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    channel: 'Lara lyrics',
    views: '1.6k',
    time: '2 months ago',
    duration: '24:25'
  }, {
    title: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.',
    channel: 'Bethel Tube',
    views: '66k',
    time: '2 days ago',
    duration: '1:47:33'
  }, {
    title: 'Am increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do.',
    channel: 'Enku Meida',
    views: '9k',
    time: '2 years ago',
    duration: '1:22'
  }, {
    title: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power.',
    channel: 'GMM TV',
    views: '190k',
    time: '1 year ago',
    duration: '3:33'
  }, {
    title: 'Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown.',
    channel: 'DJ Aron',
    views: '910k',
    time: '7 hours ago',
    duration: '5:33:65'
  }, {
    title: 'Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious.',
    channel: 'Arab News',
    views: '23k',
    time: '9 hours ago',
    duration: '6:66'
  }, {
    title: 'Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking.',
    channel: 'Ethio News',
    views: '5M',
    time: '2 minutes',
    duration: '11:33'
  }, {
    title: 'Friendship contrasted solicitude insipidity in introduced literature it. He seemed denote except as oppose do spring my.',
    channel: 'African Culture',
    views: '1.9k',
    time: '12 minutes ago',
    duration: '22:50'
  }, {
    title: 'Bringing so sociable felicity supplied mr. September suspicion far him two acuteness perfectly.',
    channel: 'Funny Kids',
    views: '30k',
    time: '2 seconds ago',
    duration: '2:56'
  }, {
    title: 'Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming.',
    channel: 'Alex Tube',
    views: '310k',
    time: '1 hour ago',
    duration: '4:20:33'
  }, {
    title: 'Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. ',
    channel: 'Deep Music',
    views: '80k',
    time: '1 second ago',
    duration: '8:10'
  }, {
    title: 'Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.',
    channel: 'Nahoo Entertainment',
    views: '13k',
    time: '2 hours ago',
    duration: '6:59'
  }, {
    title: 'Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy.',
    channel: 'Maiza Show',
    views: '25k',
    time: '3 minutes ago',
    duration: '2:59:00'
  }, {
    title: 'It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she.',
    channel: 'WWE',
    views: '77k',
    time: '1 minute ago',
    duration: '2:22'
  }, {
    title: 'Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. ',
    channel: 'Hippop World',
    views: '999',
    time: '22 minutes ago',
    duration: '00:59'
  }, {
    title: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection.',
    channel: 'Shef Shombie',
    views: '236',
    time: '2 hours ago',
    duration: '3:10'
  }, {
    title: 'To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy.',
    channel: 'Eyoha News',
    views: '89k',
    time: '12 hours ago',
    duration: '9:33'
  }, {
    title: 'Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do.',
    channel: 'Fana Meznagna',
    views: '99k',
    time: '21 hours ago',
    duration: '44:14'
  }, {
    title: 'Subjects to ecstatic children he. Could ye leave up as built match. Dejection agreeable attention set suspected led offending.',
    channel: 'Ruha Tube',
    views: '78k',
    time: '22 hours ago',
    duration: '58:13'
  }, {
    title: 'In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove.',
    channel: 'Abysinia Gamer',
    views: '67k',
    time: '2 minutes ago',
    duration: '2:55'
  }, {
    title: 'Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. ',
    channel: 'Amani Coding',
    views: '398k',
    time: '2 days ago',
    duration: '9:24'
  }, {
    title: 'IHim boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an.',
    channel: 'Top Tube',
    views: '100k',
    time: '2 years ago',
    duration: '55:12'
  }, {
    title: 'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.',
    channel: 'Movies World',
    views: '160k',
    time: '2 days ago',
    duration: '22:11'
  }, {
    title: 'Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face.',
    channel: 'Sala Relax Music',
    views: '111k',
    time: '1 hour ago',
    duration: '17:33'
  }, {
    title: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at.',
    channel: 'The Shark Band',
    views: '310k',
    time: '12 days ago',
    duration: '5:55'
  }, {
    title: 'Literature admiration frequently indulgence announcing are who you her. Was least quick after six. ',
    channel: 'Funny Moments',
    views: '143k',
    time: '22 days ago',
    duration: '7:07'
  }, {
    title: 'Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her.',
    channel: 'Divine Music',
    views: '21k',
    time: '9 years ago',
    duration: '5:55'
  }, {
    title: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. ',
    channel: 'Tana Entertainment',
    views: '88k',
    time: '2 minutes ago',
    duration: '10:43'
  }, {
    title: 'Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled.',
    channel: 'Mr Bean',
    views: '96k',
    time: '2 days ago'
  },

]