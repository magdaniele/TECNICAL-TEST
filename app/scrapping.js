import unirest from 'unirest';
import cheerio from 'cheerio';
const url =
  'https://github.com/orgs/google/repositories?type=all&q=sort%3Astars';

unirest.get(url).end(function (response) {
  const $ = cheerio.load(response.body);
  $('ul.Box-sc-g0xbh4-0, .juhHRu, .list-view-items').each(
    function (i, element) {
      element.children.length = 10;
      const best10repositories = element.children.map((_, index) => {
        let stars, forks, issues;
        switch (
          element.children[index].children[1].children[0].children[0]
            .children[2]?.children.length
        ) {
          case 12:
            stars =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[4].children[1].data;
            forks =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[2].children[1].data;
            issues =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[6].children[1].data;
            break;
          case 14:
            stars =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[6].children[1].data;
            forks =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[4].children[1].data;
            issues =
              element.children[index].children[1].children[0].children[0]
                .children[2].children[8].children[1].data;
            break;
          default:
            stars =
              element.children[index].children[1].children[0].children[0]
                .children[1].children[6].children[1].data;
            forks =
              element.children[index].children[1].children[0].children[0]
                .children[1].children[4].children[1].data;
            issues =
              element.children[index].children[1].children[0].children[0]
                .children[1].children[8].children[1].data;

            break;
        }
        return {
          name: element.children[index].children[0].children[0].children[0]
            .children[0].children[0].data,
          description:
            element.children[index].children[1].children[0].children[0]
              .children[0].children[0].children[0].data,
          language:
            element.children[index].children[1].children[0].children[0]
              .children[1].children[0].children[1]?.children[0].data ??
            element.children[index].children[1].children[0].children[0]
              .children[2]?.children[0].children[1].data ??
            element.children[index].children[1].children[0].children[0]
              .children[2]?.children[0].children[1].children[0].data,
          stars,
          forks,
          issues,
        };
      });
      console.log({ best10repositories });
    }
  );
});
