import { HomeMain, ModalCenter, ModalScroll, SKillModal, SkillList, SkillModalList } from "./style"
import { Entypo } from "@expo/vector-icons"
import  theme from "../../theme/theme"
import SkillBox from "../../components/skillBox"
import mock from './mock'
import { Feather } from '@expo/vector-icons'; 
import { useState } from "react"
import SkillBoxModal from "../../components/skillBoxModal"

function Home() {
    const [userSkill, setUserSkill] = useState([])
    const [nonUserSkill, setNonUserSkill] = useState(mock)
    const [modalOn, setModalOn] = useState(false)

    const handlePlus = () => {
      updateNon()
      setModalOn(!modalOn)  
    } 

    const updateNon = () => {
    if(userSkill.length < mock.length){
      setNonUserSkill(mock.filter((skill) => !userSkill.some((skilli) => skill.id == skilli.id)))
    }else {
      setNonUserSkill([])
    }
    }

    const addSkill = (skill) => {
      temp = skill
      temp.level = 0

      setUserSkill([...userSkill, temp])
      setNonUserSkill(nonUserSkill.filter((skillNon) => skillNon.id != skill.id))
    }

    return(
       <HomeMain>
         <SKillModal 
           animationType="slide"
           transparent={true}
           visible={modalOn}
          >
          <ModalCenter>
            <SkillModalList>
             <Feather name="x" size={40} color={theme.myWhite} style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}} onPress={() => setModalOn(!modalOn)}/>
             <ModalScroll>
             {nonUserSkill.map((skill, index) => {return <SkillBoxModal skillObj={skill} key={index} userSkill={userSkill} setUserSkill={setUserSkill} addSkill={addSkill}/>})}
             </ModalScroll>
            </SkillModalList>
          </ModalCenter>
         </SKillModal>
         <Entypo name='plus' color={theme.myWhite} size={45} style={{alignSelf: 'flex-end', marginRight: 40}} onPress={handlePlus}/>
         <SkillList contentContainerStyle={{alignItems: 'center'}}>
         {userSkill.map((skill, index) => {
           return <SkillBox skillObj={skill} key={skill.id} userSkill={userSkill} setUserSkill={setUserSkill} />
         })}
         </SkillList>
       </HomeMain>
    )
}

export default Home