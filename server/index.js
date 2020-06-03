const { ApolloServer, gql } = require('apollo-server');
const models = require('./models')

const users = [
    {
        id : 1,
        name : 'user1',
        organization : {
            id : 1
        }
    },
    {
        id : 2,
        name : 'user2',
        organization : {
            id : 2
        }
    },
    {
        id : 3,
        name : 'user3',
        organization : {
            id : 1
        }
    },
    {
        id : 4,
        name : 'user4',
        organization : {
            id : 1
        }
    },
    {
        id : 5,
        name : 'user5',
        organization : {
            id : 2
        }
    },
    {
        id : 6,
        name : 'user6',
        organization : {
            id : 2
        }
    },
    {
        id : 7,
        name : 'user7',
        organization : {
            id : 1
        }
    },
];

const organizations = [
    {
        id : 1,
        name : 'organization_1',
    },
    {
        id : 2,
        name : 'organization_2',
    },
];

const typeDefs = gql`
    type Organization {
        id: ID!
        name: String!
        users : [User]
    } 


    type User {
        id : ID!
        name : String
        email : String
        organization : Organization!
    }

    type Query {
        organization(id: ID!): Organization
        organizations : [Organization]

        getUsers(id : ID!) : [User]
        getOrganization(id : ID!) : Organization
    }
`;


const resolvers = {
    Query: {
        organizations : async (parent,args,{models})=>{
            let organizations  = await models.User.findAll();
            return organizations;
        },
        getUsers : async (parent,{id},{models})=>{
            return models.User.findByPk(id);
        },
        getOrganization : async (parent,{id},{models})=>{
            return models.Organization.findByPk(id);
        },
    },
    Organization : {
        async users(users){
            return users.getUsers();
        }
    },
    User : {
        async organization(organization){
            return organization.getOrganization();
        }
    }
};

const server = new ApolloServer({ typeDefs, 
                                  resolvers, 
                                  context: { models } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});