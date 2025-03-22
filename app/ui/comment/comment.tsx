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
                className="w-9 h-9 block object-cover rounded-full"
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
                      {
                        el.reply === 'no' ? null : <MdOutlineKeyboardArrowDown />
                      }
                      <Image
                        src={`/tube/${i+1}.jpg`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className={`w-6 h-6  object-center rounded-full ${el.hasOwnerReply ? 'block' : 'hidden'}`}
                        alt="You tube like app developed by Amanuel Ferede"
                      />
                      <span><span className="text-blue-600 font-semibold">{el.reply === '1' ? `${el.reply} reply` : el.reply === 'no' ? '' : `${el.reply} replys`}</span></span>
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
    comment: 'Everyone who is reading this you’re beautiful, and never give up your dreams, you are in this world for a reason!💖💖💖',
    name: 'Most Piano',
    views: '100',
    time: '1 minute ago',
    reply: '20',
    hasOwnerReply: true,

  },
  {
    comment: "Don't know if someone is reading this, but if you are: it doesn't matter where you are right now on this planet, I wish you a wonderful day and a happy, peaceful life where all your dreams come true. You are amazing and beautiful! I believe in you! ",
    name: 'CBC News',
    views: '234',
    time: '1 minute ago',
    reply: '6',
    hasOwnerReply: false,

  }, {
    comment: "I've heard it a lot of times, but it's a magic version that can't be missed Anyone who listens please give me a thumbs up",
    name: 'Anchor Media',
    views: '25',
    time: '2 days ago',
    reply: '23',
    hasOwnerReply: true,

  }, {
    comment: 'Hey you. Yes you.random person that I will never meet. I truely hope that you will find happiness in life. Today is going to be a great day.',
    name: 'Negash Media',
    views: '333k',
    time: '2 hours ago',
    reply: '203',
    hasOwnerReply: false,

  }, {
    comment: 'JESUS IS COMING!!!  A confirmation this morning from the Holy Spirit this morning. Hallelujah! Thank you Jesus! This was the very scripture was given in our study last evening and among others, including the message.  Bless you Pastor. Jesus is Coming!!!',
    name: 'Seyifu On Ebs',
    views: '294',
    time: '10 hours ago',
    reply: '33',
    hasOwnerReply: true,

  }, {
    comment: "To anybody who's reading this, I pray that whatever is hurting you or whatever you are constantly stressing about gets better. May the dark thoughts, the overthinking, and the doubt exit your mind. May clarity replace confusion. May peace and calmness fill your life. 🙏",
    name: 'Donkey Tube',
    views: '72k',
    time: '22 hours ago',
    reply: '9',
    hasOwnerReply: false,

  }, {
    comment: "Hey you. Yes, you. You're probably scrolling through the comments, like I am, reading all these motivational comments. If you are reading this at night, you should get some sleep, and don't stress about everything going on in the world, or what you are going through. Don't dwell on things from the past, don't stress on your future. Just live your life, because you only get one. Do whatever makes you happy, not what other people want from you. For me, I'm gonna wake up tomorrow morning, get some exercise, and cherish life for the amazing blessing that it is. I hope you do the same and have an amazing day as well!",
    name: 'Chiristian Story',
    views: '264',
    time: '12 hours ago',
    reply: '66',
    hasOwnerReply: false,

  }, {
    comment: 'To the person reading this, Good Luck! Stop stressing, everything will be okay. No matter what hardships you are facing right now, you can and will make it through it! ',
    name: 'Bible World',
    views: '75k',
    time: '19 hours ago',
    reply: '75',
    hasOwnerReply: false,

  }, {
    comment: "If you are reading this, I want to tell you that everything will be fine. You are incredible, you are unique, you can face anything in your life, you have the strength within yourself to overcome any obstacle, loss or situation. You are not alone, you are loved, you have the right to feel bad and good, you have the right to feel. Be blessed by these positive vibes and live your life to the fullest. I'm sending my love to the universe",
    name: 'CNN',
    views: '157k',
    time: '2 hours ago',
    reply: '36',
    hasOwnerReply: false,

  },
  {
    comment: "To all of the person reading this,  i'd like you to all know that someones always here for you.. no matter how hard it is, God is always there for us.. Be strong everyone and keep your faith with God.. love one another...🙏❤",
    name: 'Fana Meznagna',
    views: '242',
    time: '21 hours ago',
    reply: '89',
    hasOwnerReply: false,

  }, {
    comment: "I am a covid 19 patient...but I have 100 percent trust in God that I will be healed. In jesus' name, all of the people suffering this sickness will be healed. And all other people suffering from all kinds of sickness and pain will be healed too.  God has always been sending angels to us. Keep hoping, keep praying, keep listening to beautiful things and let go of the negativity. Keep safe everyone. Thank you for this wonderful video. I love it.",
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
    reply: 'no',
    hasOwnerReply: false,
  }, {
    comment: 'To the person reading this, Good Luck! Stop stressing, everything will be okay. No matter what hardships you are facing right now, you can and will make it through it!🥰😊🌹',
    name: 'Top Tube',
    views: '19',
    time: '2 years ago',
    reply: 'no',
    hasOwnerReply: false,

  }, {
    comment: 'God is merciful....His amazing grace be with all of us..........🙏🙏🙏🙏🙏',
    name: 'Movies World',
    views: '50',
    time: '2 days ago',
    reply: 'no',
    hasOwnerReply: false,

  }, {
    comment: 'To the person reading this, Good Luck! Stop stressing, everything will be okay. No matter what hardships you are facing right now, you can and will make it through it!🥰😊🌹',
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
    reply: 'no',
    hasOwnerReply: false,

  }, {
    comment: 'Magical music.... Create wonderful and positive energy... God bless u all listener a beautiful life❤.. ',
    name: 'Funny Moments',
    views: '26',
    time: '22 days ago',
    reply: '1',
    hasOwnerReply: false,

  }, {
    comment: 'Never ignore a person who loves you, cares for you, misses you. Because one day, you might wake up from your sleep and realize that you lost the moon while counting the stars 👍👍',
    name: 'Divine Music',
    views: '37',
    time: '9 years ago',
    reply: 'no',


  }, {
    comment: 'This sound is so wonderful. The person who is reading this comment , i wish you great success , health, love and happiness ! ',
    name: 'Tana Entertainment',
    views: '27',
    time: '2 minutes ago',
    reply: 'no',
    hasOwnerReply: false,

  }, {
    comment: 'Whoever is reading this comment, I wish you success, health, love and happiness!',
    name: 'Mr Bean',
    views: '82',
    time: '2 days ago',
    reply: 'no',
    hasOwnerReply: false,
  },

]