import React from 'react';
import { ScrollView, View } from 'react-native';
import { Colors, Fonts, Images } from 'Constants';
import { McText, McImage} from 'Components';
import styled from 'styled-components/native'


const fakeData = {
    "Premier League": [
        { team: "Team A", played: 20, won: 12, draw: 4, lost: 4, goalDifference: 15, points: 40 },
        { team: "Team B", played: 20, won: 11, draw: 5, lost: 4, goalDifference: 10, points: 38 },
    ],
    "La Liga": [
        { team: "Team C", played: 21, won: 13, draw: 3, lost: 5, goalDifference: 18, points: 42 },
        { team: "Team D", played: 20, won: 10, draw: 5, lost: 5, goalDifference: 8, points: 35 },
    ],

};


const Standings = () => {
    return (
        <Container>
            <ScrollView>
                {Object.keys(fakeData).map((tournament) => (
                    <View key={tournament}>
                        <McText size={24} bold>{tournament}</McText>
                        <HeaderRow>
                            <McText size={16} bold>Pos</McText>
                            <McText size={16} bold>Team</McText>
                            <McText size={16} bold>Pld</McText>
                            <McText size={16} bold>W</McText>
                            <McText size={16} bold>D</McText>
                            <McText size={16} bold>L</McText>
                            <McText size={16} bold>GD</McText>
                            <McText size={16} bold>Pts</McText>
                        </HeaderRow>
                        {fakeData[tournament].map((team, index) => (
                            <TeamRow key={index}>
                                <McText size={18}>{index + 1}</McText>
                                <McText size={18}>{team.team}</McText>
                                <McText size={18}>{team.played}</McText>
                                <McText size={18}>{team.won}</McText>
                                <McText size={18}>{team.draw}</McText>
                                <McText size={18}>{team.lost}</McText>
                                <McText size={18}>{team.goalDifference}</McText>
                                <McText size={18} bold>{team.points}</McText>
                            </TeamRow>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </Container>
    );
};


const Container = styled.SafeAreaView`
    flex: 1;
    background: ${Colors.background};
`;

const HeaderRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const TeamRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
`;

export default Standings;