import { Card } from "@mui/material";
import { H5, Paragraph } from "components/Typography";
import FlexBetween from "components/flexbox/FlexBetween";

const Summery = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween>
        <H5>Summary</H5>
        {/* <EditButton /> */}
      </FlexBetween>

      <Paragraph mt={2} fontWeight={400}>
        A practical problem shows that, when we finish reading a book, we will
        have to spend an additional amount of 100-300 thousand VND for a new
        book to read. The loop continues, costing us a lot to keep reading.
        Since then, the Project was born to solve the above problem. From
        spending a lot of money to read books, now readers only need an initial
        capital to read many different books, based on a NFT (Non-Fungible
        Tokens) book application running on the blockchain platform called
        blockchain platform called NFT. Rades. Rades provides users with a
        reading application that allows readers to:
        <ul>
          <li>
            Save on reading costs with only initial capital based on the
            combination of the book exchange system and the Read To Earn
            mechanism.
          </li>
          <li>
            After many times of exchanging and reading books, readers will earn
            profits from reading books thanks to the project's token rewards for
            reading.
          </li>
          <li>
            Validate and ensure the copyright of books published on the
            application.
          </li>
        </ul>
      </Paragraph>
    </Card>
  );
};

export default Summery;
