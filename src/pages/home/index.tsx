import { CHOICES, ChoicesType, Types } from "libs/consts";
import { useCallback, useState } from "react";
import { Button, Column, Container, Flex } from "./style";

export const HomePage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [win, setWin] = useState<"You won !" | "Oups, you lost" | null>(null);
  const [computerChoice, setCComputerChoice] = useState<
    ChoicesType["type"] | null
  >(null);

  const [draw, setDraw] = useState(false);

  const getComputerChoice = () => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(CHOICES[Math.floor(Math.random() * CHOICES.length)]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setIsLoading(false);
        reject("An error occured");
      }
    });
  };

  const startGame = useCallback(async (userChoice: Types, canBeats: Types) => {
    const computerChoice = (await getComputerChoice()) as ChoicesType;
    setCComputerChoice(computerChoice.type);
    const winnable = canBeats.includes(computerChoice.type);

    if (userChoice === computerChoice.type) setDraw(true);
    else setDraw(false);

    if (winnable) setWin("You won !");
    else setWin("Oups, you lost");
  }, []);

  return (
    <Container>
      <Column>
        <h1>Rock/Paper/Scissors</h1>
        <h4>Choice, wait and get result</h4>
        <Flex>
          {CHOICES.map(({ type, beats, id }) => (
            <Button onClick={() => startGame(type, beats)} key={id}>
              {type}
            </Button>
          ))}
        </Flex>
        {isLoading && <p>Choix de l'ordinateur en cours...</p>}
        {win && !isLoading && !draw && (
          <Column>
            <p>Computer: choice : {computerChoice}</p>
            {win}
          </Column>
        )}
        {draw && !isLoading && <p>This is a draw!</p>}
      </Column>
    </Container>
  );
};
