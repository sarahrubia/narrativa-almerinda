import fs from 'fs/promises';
import { Writer, Parser } from 'n3';
import path from 'path';

const outputDir = './entidades';

async function splitTtl(inputFile) {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const data = await fs.readFile(inputFile, 'utf-8');
    
    const quadsBySubject = {};

    const parser = new Parser();
    parser.parse(data, (error, quad) => {
      if (error) {
        console.error('Erro ao processar tripla:', error);
        return;
      }

      if (quad) {
        const subject = quad.subject.value;
        if (!quadsBySubject[subject]) {
          quadsBySubject[subject] = [];
        }
        quadsBySubject[subject].push(quad);
      } else {
        processSubjects(quadsBySubject);
      }
    });

  } catch (err) {
    console.error('Erro ao ler o arquivo TTL:', err);
  }
}

async function processSubjects(subjects) {
  for (const subject in subjects) {
    const quads = subjects[subject];
    const writer = new Writer();
    writer.addQuads(quads);

    writer.end((error, result) => {
      if (error) {
        console.error('Erro ao escrever o arquivo:', error);
        return;
      }

      const filename = subject.split('/').pop().split('#').pop() + '.ttl';
      const filepath = path.join(outputDir, filename);

      fs.writeFile(filepath, result)
        .then(() => console.log(`Arquivo salvo: ${filepath}`))
        .catch(err => console.error(`Erro ao salvar ${filepath}:`, err));
    });
  }
}

splitTtl('./public/knowledge-graph.ttl');

