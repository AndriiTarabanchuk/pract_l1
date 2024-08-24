type Cat = {
  meow: () => string;
};

interface Dog {
  bark: () => string;
}

type DogOrCat = Dog | Cat;
type DogAndCat = Dog & Cat;

export {};
