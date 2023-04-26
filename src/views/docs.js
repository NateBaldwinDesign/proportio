import React from 'react';
import { useRecoilState } from 'recoil';
import Panel from '../components/panel';

const Docs = (props) => {
  return (
    <>
      <div className="splitView">
        <Panel direction="column" fixed>
          <h4>Topics</h4>
          <ul>
            <li>
              <a href="#">Stuff</a>
            </li>
          </ul>
        </Panel>

        <main className="main--content">
          <div className="column">
            <article>
              <h1>Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
                maximus dui, eu viverra tortor. Sed et dictum justo. Nulla sit
                amet nibh eu tortor venenatis ultricies non et magna. Donec
                lectus diam, cursus in odio eu, posuere venenatis turpis.
                Quisque et tortor quis lorem egestas consectetur. Pellentesque
                mattis nulla et massa feugiat vulputate. Sed condimentum sit
                amet tellus faucibus ornare. Fusce at pellentesque mi, eu
                facilisis sem.
              </p>

              <p>
                Praesent eget tellus ligula. Praesent malesuada mi sit amet erat
                maximus, quis scelerisque quam iaculis. Vestibulum enim mauris,
                venenatis in nisi nec, facilisis fermentum turpis. Donec
                posuere, nisi eget fringilla mattis, ipsum felis tristique dui,
                vitae fermentum diam nibh sit amet tellus. Proin auctor justo a
                augue eleifend, eu consectetur lacus fermentum. Etiam id
                malesuada ipsum, et fringilla est. Morbi interdum dui et urna
                eleifend, eget faucibus libero pellentesque. Proin egestas dolor
                ex. Suspendisse mauris arcu, bibendum non fringilla sed,
                lobortis et sem. Nullam convallis urna et ipsum tempus egestas.
                Curabitur dictum tincidunt ultricies. Quisque a risus id magna
                ultricies laoreet in ut ante.
              </p>

              <p>
                Aenean ex metus, pharetra eget viverra id, dignissim quis massa.
                Nunc nec orci massa. Donec volutpat sapien eu ipsum mattis
                fringilla. Duis vehicula facilisis porttitor. Nam sit amet
                lectus tellus. Vivamus erat magna, convallis viverra placerat
                at, sodales sit amet orci. Aliquam erat volutpat. Praesent non
                diam ac mi mollis tincidunt. In venenatis lectus lacus, sed
                ullamcorper enim vehicula at. Proin tincidunt eleifend sem,
                viverra pellentesque turpis pellentesque non. Vivamus et ornare
                nibh. Vivamus ut nunc fringilla nisi aliquam lacinia.
                Suspendisse varius, mauris in cursus porta, turpis erat blandit
                orci, blandit sodales arcu eros ac elit. Proin quis tempus
                justo, id maximus tortor. Nam ut nulla vestibulum, dictum ante
                ut, lacinia metus.
              </p>

              <p>
                Nam vel velit laoreet, ullamcorper felis nec, fermentum velit.
                Duis facilisis odio vitae magna egestas, quis rutrum felis
                ultrices. Donec malesuada ullamcorper arcu, sed mattis metus
                finibus nec. Sed ac finibus enim. Nam orci lorem, efficitur vel
                urna eget, consequat varius elit. Mauris viverra urna risus.
                Donec interdum, ligula vitae mattis pretium, sem eros
                scelerisque orci, vel ultricies ipsum metus et augue. Nulla
                facilisis risus massa, at eleifend mi placerat quis. Maecenas
                hendrerit hendrerit ex, eu tempor nisl scelerisque quis.
                Maecenas orci quam, commodo a tristique nec, venenatis a nibh.
              </p>

              <p>
                Cras malesuada, tortor vel tincidunt lobortis, erat arcu tempus
                neque, at elementum nibh nisi sit amet est. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam pellentesque est vehicula, tincidunt velit
                sed, varius ex. Sed nec mi euismod, cursus sem vel, mattis
                massa. Etiam magna turpis, lobortis ac tellus vel, lobortis
                malesuada nunc. Proin egestas justo non odio sodales, ut
                efficitur mi dignissim. Proin a congue enim. Sed aliquet maximus
                pellentesque. In lacus urna, tempor eu lacus dapibus, tempus
                rhoncus arcu.
              </p>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default Docs;
