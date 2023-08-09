import { useState } from "react";
import theme from "../../theme/theme";
import { SkilBoxTitle, SkillBoxContainer, SkillBoxDesc, SkillBoxFullDesc, SkillImg, SkillTopBox, LevelCounterContainer, Level } from "./style";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 


function SkillBoxModal (props) {

    return(
        <SkillBoxContainer onPress={() => props.addSkill(props.skillObj)}>
          <SkillTopBox>
            <SkillImg source={{uri: `${props.skillObj.photo}`}}/>
            <SkilBoxTitle>{props.skillObj.name}</SkilBoxTitle>
            <SkillBoxDesc style={{opacity: 1}}>{props.skillObj.desc.substring(0,15)+'...'}</SkillBoxDesc>
            <SimpleLineIcons name='arrow-down' color={theme.myWhite} size={40} style={{marginLeft: 15, marginTop: 10, opacity: 0}} />
            </SkillTopBox>
        </SkillBoxContainer>
    )
}

export default SkillBoxModal