import { useState } from "react";
import theme from "../../theme/theme";
import { SkilBoxTitle, SkillBoxContainer, SkillBoxDesc, SkillBoxFullDesc, SkillImg, SkillTopBox, LevelCounterContainer, Level } from "./style";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 


function SkillBox (props) {
    const [opened, setOpened] = useState(false)
    const [level, setLevel] = useState(props.skillObj.level)

    const handleTrash = () => {
        console.log('userSkill: ', props.userSkill.filter((skill) => skill.id != props.skillObj.id))
        props.setUserSkill(props.userSkill.filter((skill) => skill.id != props.skillObj.id))
    }

    return(
        <SkillBoxContainer style={{height: !opened ? 80 : 300}}>
          <SkillTopBox>
            <SkillImg source={{uri: `${props.skillObj.photo}`}}/>
            <SkilBoxTitle>{props.skillObj.name}</SkilBoxTitle>
            <SkillBoxDesc style={{opacity: opened ? 0 : 1}}>{props.skillObj.desc.substring(0,15)+'...'}</SkillBoxDesc>
            {!opened ?
            <SimpleLineIcons name='arrow-down' color={theme.myWhite} size={40} style={{marginLeft: 15, marginTop: 10}} onPress={() => setOpened(!opened)}/>
            :
            <SimpleLineIcons name='arrow-up' color={theme.myWhite} size={40} style={{marginLeft: 15, marginTop: 10}} onPress={() => setOpened(!opened)}/>   
            }
            </SkillTopBox>
            {opened &&
            <>
            <SkillBoxFullDesc>{props.skillObj.desc}</SkillBoxFullDesc>
            <LevelCounterContainer>
                <AntDesign name="minus" color={theme.myWhite} size={25} onPress={() => {level > 0 && setLevel(level-1)}}/>
                <Level>{level}</Level>
                <AntDesign name="plus" color={theme.myWhite} size={25} onPress={() => {level < 5 && setLevel(level+1)}}/>
            </LevelCounterContainer>
            <Foundation name="trash" size={40} color={theme.myWhite} style={{marginTop: 15}} onPress={handleTrash}/>
            </>
            }
        </SkillBoxContainer>
    )
}

export default SkillBox