import { Request, Response, Application } from 'express';
import { v4 as uuid } from 'uuid';
import { db, withId } from './db';

export function genericEntities(app:Application) {
  app.get('/:entity', (req:Request, res:Response) => {

    const values = Object.values(db[req.params.entity] || {});

    const filter = (obj:any) =>
      Object.keys(req.query).length
      ? Object.keys(req.query)
        .map((k:string) => !!JSON.stringify(obj[k] || {}).match(req.query[k] as string))
        .reduce((prev:boolean, current:boolean) => prev && current)
      : true;

    res.status(200).send(values.filter(filter));
  });

  app.get('/:entity/:id', (req:Request, res:Response) => {
    const value = db[req.params.entity] ? db[req.params.entity][req.params.id] : undefined;
    if(value === undefined)
      res.status(404).send();
    else
      res.status(200).send(value);  
  })

  app.put('/:entity/:id', (req:Request, res:Response) => {
    if(db[req.params.entity] === undefined)
      db[req.params.entity] = {};

    db[req.params.entity][req.params.id] = withId(req.params.id, req.body);
    
    res.status(200).send(db[req.params.entity][req.params.id]);  
  });

  app.post('/:entity', (req:Request, res:Response) =>  {
    if(db[req.params.entity] === undefined)
      db[req.params.entity] = {};

    const newId = uuid();
    db[req.params.entity][newId] = req.body;
    res.status(201).send(withId(newId, db[req.params.entity][newId]))
  })
  
  app.delete('/:entity/:id', (req:Request, res:Response) => {
    if(db[req.params.entity] == undefined)
      res.status(400).send();
    else
      delete db[req.params.entity][req.params.id];
      res.status(200).send();
  });

  app.post('/:entity/:id', async (req:Request, res:Response) => {
    res.status(200).send([]);
  });
}
