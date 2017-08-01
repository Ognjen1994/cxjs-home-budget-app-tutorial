import {HtmlElement, Link, Button} from 'cx/widgets';
import {ContentPlaceholder} from 'cx/ui';
import Controller from "./Controller";

export default <cx>
   <div
      controller={Controller}
      class={{
         "layout": true,
         "nav": {bind: "layout.aside.open"}
      }}
   >
      <main class="main" onMouseDownCapture="onMainClick">
         <ContentPlaceholder />
      </main>
      <header class="header">
         <i
            class={{
               hamburger: true,
               open: {bind: 'layout.aside.open'}
            }}
            onClick={(e, {store}) => {
               store.toggle('layout.aside.open');
            }}
         />
         <ContentPlaceholder name="header"/>
      </header>
      <aside class="aside">
         <h1>Cx App</h1>
         <dl>
            <dt>
               Budget
            </dt>
            <dd>
               <Link href="~/entry" url:bind="url">
                  Add Expense
               </Link>
            </dd>
            <dd>
               <Link href="~/log" url:bind="url">
                  Log
               </Link>
            </dd>
         </dl>
      </aside>
   </div>
</cx>