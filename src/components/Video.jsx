import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Video = () => {

    const videoarr = [
      {
        title: 'Required Javascript',
        url: 'https://www.youtube.com/embed/m55PTVUrlnA',
      },
      {
        title: 'Learn React',
        url: 'https://www.youtube.com/embed/f55qeKGgB_M',
      },
      {
        title: 'Simple website',
        url: 'https://www.youtube.com/embed/b50zSyLiCYQ?start=4055',
      },
      {
        title: 'Resturent Website',
        url: 'https://www.youtube.com/embed/EHTWMpD6S_0?start=3036',
      },
      {
        title: 'ToDo List Project',
        url: 'https://www.youtube.com/embed/EHTWMpD6S_0?start=7940',
      },
      {
        title: 'Interview Questions',
        url: 'https://www.youtube.com/embed/mXxsjzgD3CI?start=7940',
      },
      ];

    const [videoSrc,setVideoSrc] = useState(videoarr[0].url);
  return (
    <>
      <Stack direction={["column", "row"]} h={'100vh'}>
        <VStack w={'full'}>
            {/* <video src={videoSrc} controls controlsList='nodownload' style={{width: '100%',}}></video> */}
            <iframe
            title="Video Player"
            src={videoSrc}
            width="100%"
            height="100%"
            
            
            allowFullScreen
          ></iframe>
            <VStack alignItems={'flex-start' } p={'8'} w={'full'} overflowX={'auto'}>
                <Heading>Sample Video 1</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus blanditiis quidem dolore, porro reiciendis deleniti unde consequuntur laborum maiores rem amet vel provident veritatis cupiditate quo quas aliquid. Sequi, reprehenderit!
                Distinctio aspernatur laudantium consequuntur eum voluptatem tempore natus, rerum dolores molestiae aut nam incidunt error consectetur voluptatum nostrum, eius ratione corporis officia quos. Sit corporis perspiciatis amet ratione, sint facilis.
                Dolorum repudiandae ea sit magnam provident excepturi nihil modi. Impedit inventore quas maiores magnam. Dicta debitis aut amet eveniet, repellendus hic accusamus minima aliquam totam tempore quam nulla pariatur perferendis?
                Nisi sequi fugit enim officiis laudantium voluptatem voluptatibus, delectus sapiente aut harum et aperiam nemo impedit facilis tenetur perspiciatis veniam architecto possimus esse error dignissimos voluptas ea optio dolores? Vel.
                Quas, illo fugiat? Animi fuga cumque aliquid quae distinctio ex quo, non, placeat fugit sapiente omnis atque delectus iure facere molestias deserunt! Numquam earum ducimus mollitia. Illum molestias ipsa accusantium.
                Ab debitis laudantium reprehenderit, amet sunt, dignissimos at molestias et nihil cumque saepe, illo quis rerum alias eos. Suscipit commodi error deleniti laboriosam, dolorem iste! Nemo, officiis expedita. Recusandae, nostrum.
                Neque quasi eligendi exercitationem, rerum aperiam, quis earum ducimus veritatis velit iusto minus ab voluptatem ratione quo praesentium debitis? Vel nam exercitationem molestias nemo minima, quisquam vero recusandae rerum esse.
                Quis doloremque aut perspiciatis quas, ad architecto quos asperiores veniam adipisci laudantium, nisi similique. Odit assumenda voluptatem blanditiis facilis sint vero. Facere aut tenetur itaque similique laudantium sunt cumque totam?
                Illo tenetur nostrum eveniet ea fuga eos assumenda, illum doloremque eaque odio nesciunt ullam quas eius, provident minima, totam deserunt vel. Voluptate veniam adipisci harum fuga ad, dolore id sapiente?
                Recusandae sint voluptatum delectus modi iusto incidunt unde dolores eos voluptates facilis perferendis nisi voluptatem atque repellendus commodi, nam nihil rerum nesciunt in, explicabo nemo illo architecto. Ipsa, mollitia sunt.</Text>
            </VStack>
        </VStack>

        <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
            {
                videoarr.map((item) => (
                  <Button onClick={() => setVideoSrc(item.url)} variant={'ghost'} colorScheme='purple'>{item.title}</Button>
                ))
                
            }
        </VStack>

      </Stack>
    </>
  )
}

export default Video
