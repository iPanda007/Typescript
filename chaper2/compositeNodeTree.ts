type LeafNode= {
    data:string
}
type TreeNode = {
    children:Array<Tree>
}

type Tree = LeafNode | TreeNode;

let tree : Tree = {
    children: [
        {data:"Aung Kyaw Khaing"},
        {children:[
           {children:[
             {data:"aa"}
           ]}
        ]},
    ]
}
console.log("tree",tree)
