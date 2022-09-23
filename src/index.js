import './styles/main.scss'

document.getElementById("getData").addEventListener("click",()=>{
    getData();
});
console.log("hello world");

async function callAPI()
{
    let key='5d62a4c0ef98410f874a06572c6ddfa5';
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    .then((res)=>{return res.json()})
    .then((data)=>{return data.articles});
}
let index=0;
function getData()
{
    callAPI().then((data)=>{
        console.log(data);
        document.getElementById("data").innerText=data[index].author;
        document.getElementById("description").innerText=data[index].description;
        index++;
    });
}

module.exports = function () {
    return {
      name: "babel-plugin-remove-console-debug",
      visitor: {
        MemberExpression(path, state) {
          let { enable } = state.opts
          if (enable === undefined) {
            enable = process.env.NODE_ENV === "production"
          }
          if (enable && path.type === "MemberExpression" && path.node.object.name === "console" && path.node.property.name === "debug") {
            path.parentPath.remove()
          }
        }
      }
    }
  }

