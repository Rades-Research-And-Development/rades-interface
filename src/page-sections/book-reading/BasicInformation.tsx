import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { Box, Card, Chip, Divider, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { getBook } from "__fakeData__/books/books";
import { H6, Tiny } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function BasicSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{ width: "100%", marginTop: "1rem" }}>
        <InputLabel id="demo-simple-select-label">Font</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Font"
          onChange={handleChange}
        >
          <MenuItem value={10}>Arial</MenuItem>
          <MenuItem value={20}>Time new roman</MenuItem>
          <MenuItem value={30}>Mixed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const textBook = [
  `Nowadays, car publish traditionally or self-published or not even published in print at all. But most book content is arranged in a traditional, prescribed manner. The elements of this content share a common structure, and each element appears in a similar location in every book. The most common are outlined below. Some may not always appear, but when they do, they are in the same place in every book.

A Book's Front Matter
Front matter is the information that appears in the very beginning of a book. The front matter contains the nuts and bolts of the book’s publication—information such as title, author, publisher, ISBN, and Library of Congress data. The front matter pages usually aren’t visibly numbered. However, if they are, the numbers appear as Roman numerals.

The typical parts of a book's front matter include the following:

Half Title (Sometimes Called Bastard Title): Actually, this is just the title of the book.
Frontispiece: This is the piece of artwork on the left (otherwise known as “verso”) side of the page opposite the title page on the right (otherwise known as “recto”) side.
Title Page: The title page is the page that contains the title of the book, the author (or authors) and the publisher.
Copyright Page: This includes the declaration of copyright—meaning, who owns the copyright ( generally the authors)—and other types of credits such as illustrator, editorial staff, and indexer. Sometimes, this page has notes from the publisher and copyright acknowledgments—for books that contain reprinted material that requires permissions, such as excerpts, song lyrics, etc. The edition number (the number that represents the number of the edition and of the printing) is also on the copyright page. Some books will specifically note they are a “first edition.” With others, the edition is represented with a number. In those cases, a first edition would look like: 10 9 8 7 6 5 4 3 2 1. A second edition would look like: 10 9 8 7 6 5 4 3 2.
Dedication: The dedication page is where the author honors an individual, or individuals, by declaring that the labor of the book is dedicated “To” (and the name, or names, are filled in).
Acknowledgments: This page is where the author thanks those who contributed their time, resources, and talent towards the effort of writing the book.
Table of Contents: This page or pages outline what is included in each chapter of the book.
Foreword: ​The forward is what is referred to as the “set up” for the book—typically written by someone other than the author.
Preface or Introduction: The introduction is another “set up,” but it's generally written by the author.`,
  `A Book's Body Matter
Body matter is the core contents of the book—or what is called the “story.” The core content is most often divided into discrete segments, most commonly chapters. Chapters may be part of larger divided chunks, called parts or sections. The body matter is numbered with Arabic numerals beginning with the number “1” on the first page of the first chapter.​

A Book's End Matter
End matter is the material at the back of the book, generally optional.

Glossary: The glossary is a list of term definitions used throughout the book that might be unfamiliar to the reader.
Bibliography: Most often seen in non-fiction like a biography or an academic text, a bibliography lists the references and sources used in researching or reporting the book.
Index: An index is an optional but highly desirable element for non-fiction works. Placed at the very end of the book, it acts as a map to the mentions of and references to major topics and people throughout the work, indicating the specific page numbers on which they appear. A long index entry often breaks down with terse descriptions the mentions: It might list an individual's name, then indicate "birth of," "education of," "marriage of," followed by the corresponding pages. An index is arranged in alphabetical order.`,
  `Electrical  Services  Engineering  is  a  vital  engineering  activity  of  the  built environment discipline. It is  the  aim of this text to provide the reader with the underlying principles of the  subject to understand the practical treatment of the design and analysis of electrical services systems in buildings.is text is organized into two volumes. Volume 1 presents the fundamental theory and equations for the design of electrical circuits. Volume 2  is  devoted  to  more advanced topics such as Power transformers, Whole-life-time Ownership cost and IEC/IEEE Fault level calculations.It is intended  that  this set  of  two books  will  be  a  suitable course  text  for both undergraduate and postgraduate degree courses. Volume 1 can be used for the rst and second years of an electrical power engineering module leading to a rst degree in building services or mechanical or civil engineering degree. Volume 2 is suitable for  a  specialised electrical  services  engineering  module in  the  third and  fourth years of an electrical power engineering or building services engineering degree. It can also serve as a useful reference text for postgraduate MSc and MEng degrees satisfying the further learning requirements for CEng registrations in Sustainable Power Engineering and Building Services disciplines worldwide.It is hoped that the large number of worked examples contained in this text will help the reader develop an understanding of the electrical services system design solutions. For building  services engineering practitioners, these two books could serve as a self-study or reference text for further learning use. e term “advanced” in  the  title is  used  in a  relative sense,  to  distinguish the  lecture  notes used  by the author for his teaching of many continuous professional development  short courses. Inevitably the text will no doubt contain some errors, which are entirely the  responsibility  of  the  author.  I  welcome comments  from users  of these  two books. Information on how they can be improved would be gratefully received`,
  `The literary status of writers is strongly dependent on the critical attention given to their books in the daily and weekly press. Previous research has shown that this attention depends to a great extent on attributes that are external to the work in question, but are related to its institutional setting, notably the stature of the publisher and the critical reception of previous works by the same author. This article considers the options writers have at their disposal to stimulate or hold the interest of the critics. Following a theoretical outline of the types of activities authors can engage in, an analysis is performed on the relationship between 279 writers' involvement in a number of ‘sideline’ activities in the Dutch literary world and the degree of critical interest in the books of these writers.Both the versatility of the authors' performance in the literary world and the extent to which they were involved in prominent institutions proved to have a strong positive relationship to the amount of critical attention their books received. A subsequent analysis confirmed the hypothesis that ‘Publisher status’ and ‘Previous critical attention’ are not the only external attributes that affect the amount of attention reviewers give to new works of fiction. The versatility of the author's performance in the literary world as well as his or her involvement in prominent literary institutions are also relevant.`,
  `S. Janssen / Poetics 25 (1998) 265-280  3  who writes, but someone who is recognized as such. This recognition is expressed, above  all, in  the  willingness of  a  literary publishing  house  to publish  his or  her writings.1 Publications are a confirmation of someone' s authorship and of the claims s/he can make on that basis. Thus, publications of new works in book form are a pre- requisite for the interest of critics writing in the daily and weekly press. In most cases, however, book publications appear insufficient to incite or hold the interest of the critics, or more generally, to enable an author to achieve a position of importance. The literary world only offers a limited number of individuals successful careers, while there are many who aspire to such a career. Only a small  number of authors who, in a given period are competing for the favor of the critics, can count on their full attention (Janssen, 1994: 34-77). The publications of most aspirants are not noticed or attract little interest. This holds true not only for new authors, but also for those with a respectable number of titles to their name. The latter can regularly observe how their books lose out not only to the latest products of famous writers, but also to newcomers who seem to achieve in a single blow the recognition they have worked for for years. There is only a select group of authors whose work  is followed closely and continuously by the critics. For a much larger group, critical attention tends, after an initial period of intensity, to diminish and shift to a new consignment of writers. The above suggests that, in many cases, authors must be willing to engage in other activities in order to become and remain the subject of discussion. A number of case studies can be cited that draw attention to the positive effect of a versatile performance by authors  in the literary world  on the  critical reception of their work (Bel, 1993; Bourdieu, 1983 and 1993; Van Boven, 1992; Van Dijk, 1994; Janssen, 1994: 138ff.; De Nooy, 1993; Van Rees, 1987: 290ff.; Ritchie, 1988; Rodden, 1989). Authors who are active on several fronts seem to have more chance of focusing attention on their work than those who limit themselves to publishing new books. On the basis of these studies, various kinds of sideline activities can be identified that seem to advance the careers  of  writers and,  more particularly,  increase their chances  of attracting  and sustaining critical interest, notably, publishing creative work through channels other than books, activities of a reflective nature, and activities that contribute to their 'social capital'.  2.1. Publishing through channels other than books  Literary magazines form an important additional publication channel, because their circle of  readers consists mainly of people who  are professionally involved in the production or dissemination of literature (see Verdaasdonk and Seegers, 1990).  1  Publications in literary magazines also comprise a form of recognition.  For aspiring writers they can  be a crucial step for gaining access to certain literary publishers (see Janssen and Olislagers 1986: 276ff.). Magazine articles alone are, however, in the long run insufficient for attaining the status of author. If such publications are not followed in a given time by publications in the form of books, which is the case fora great many of the newcomers who write in literary magazines (ibid.: 280ff.), it implies that a person's claim to be a writer has not received any further recognition and is therefore open to question`,
];
const BasicInformation: FC = () => {
  const { id } = useParams();

  // const [y, setY] = useState(1)
  const navigate = useNavigate();
  let y = 0;
  return (
    <>
      <Card sx={{ border: "2px solid" }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <H6 padding={3}>
              {getBook(id)[0]?.volumeInfo?.title.slice(0, 25) + "..."}
            </H6>
          </Grid>
          <Grid item xs={4}>
            <BasicSelect />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Divider />
        <Box margin={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div
                style={{ overflow: "scroll", height: "55vh" }}
                onScroll={(e) => {
                  // setY(y + 1)
                  y += 1;
                  if (y % 70 === 0) {
                    navigate(`/dashboards/book-tracking/${id}`);
                  }
                }}
              >
                <Typography
                  variant="body2"
                  style={{ textAlign: "justify" }}
                  gutterBottom
                >
                  <Grid item md={7} xs={12} style={{ fontFamily: "Mixed" }}>
                    {/* <StyledCarouselProvider
                      totalSlides={100}
                      dragEnabled={false}
                      naturalSlideWidth={90}
                      naturalSlideHeight={150}
                    > */}
                    {/* <StyledStack spacing={1}>
                        {['asdas', 'asdfasdf'].map((item, _: number) => (
                          <Dot slide={_} key={_} style={{ width: 60, height: 55 }}>
                            {item}
                          </Dot>
                        ))}
                      </StyledStack> */}

                    {/* <Slider> */}
                    {textBook.map((item, _: number) => (
                      <>
                        <Typography variant="h3" component="div" gutterBottom>
                          {_ +
                            1 +
                            ". " +
                            item.split(" ")[0].replace(",", "") +
                            " " +
                            item.split(" ")[1].replace(",", "")}
                        </Typography>
                        {item}
                      </>
                    ))}
                    {/* </Slider> */}

                    {/* <StyledIconButton>
              <Heart />
            </StyledIconButton> */}
                    {/* </StyledCarouselProvider> */}
                  </Grid>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12}>
              {["Time reading", "Coin mint", "Reading progress"].map(
                (data, _: number) => {
                  let icon_: any;
                  if (data === "Time reading") icon_ = <AccessTimeIcon />;
                  else if (data === "Coin mint") icon_ = <CasinoOutlinedIcon />;
                  else if (data === "Reading progress")
                    icon_ = <AutoStoriesOutlinedIcon />;
                  let arr = [
                    Math.floor(Math.random() * 70) + 30,
                    Math.floor(Math.random() * 70) + 30,
                    Math.floor(Math.random() * 70) + 30,
                  ];
                  return (
                    <Grid container alignItems="center" spacing={0.5}>
                      <Grid item xs={6}>
                        <Chip
                          style={{ border: "none" }}
                          icon={icon_}
                          label={data}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        {/* <LinearProgress value={3} sx={{ border: '2px solid', width: '90%', marginLeft: "5%" }} /> */}
                        <FlexBox alignItems="center">
                          <LinearProgress
                            value={arr[_]}
                            variant="determinate"
                            sx={{
                              flexGrow: 1,
                              ml: 3,
                              mr: 1,
                              border: "2px solid",
                            }}
                          />
                          <Tiny fontWeight={600} color="text.primary">
                            {`${arr[_]}`}
                          </Tiny>
                        </FlexBox>
                      </Grid>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default BasicInformation;
