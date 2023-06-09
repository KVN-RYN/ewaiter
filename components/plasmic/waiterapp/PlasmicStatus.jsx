// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 54gWnNeJTpdtwf46XhFcJL
// Component: JevoQM4jsT
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  usePlasmicDataConfig,
  executePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsvrTwc8W1T6YPe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vrTWC8W1T6yPe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_waiterapp.module.css"; // plasmic-import: 54gWnNeJTpdtwf46XhFcJL/projectcss
import sty from "./PlasmicStatus.module.css"; // plasmic-import: JevoQM4jsT/css
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: JUe7RxQBea/icon
import ChevronLeftIcon from "./icons/PlasmicIcon__ChevronLeft"; // plasmic-import: Bt_vvQvRSZ/icon
import Ellipse11Icon from "./icons/PlasmicIcon__Ellipse11"; // plasmic-import: xaJqx1SkSH/icon
import IcsharpHistory2Icon from "./icons/PlasmicIcon__IcsharpHistory2"; // plasmic-import: pqvLurHzFN/icon

export const PlasmicStatus__VariantProps = new Array();

export const PlasmicStatus__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStatus__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const { cache, mutate: swrMutate } = usePlasmicDataConfig();
  const mutate = swrMutate;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvrTwc8W1T6YPe()
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"iPhone11ProMax7"}
            data-plasmic-override={overrides.iPhone11ProMax7}
            className={classNames(projectcss.all, sty.iPhone11ProMax7)}
          >
            <div
              data-plasmic-name={"group49"}
              data-plasmic-override={overrides.group49}
              className={classNames(projectcss.all, sty.group49)}
            >
              <div
                data-plasmic-name={"rectangle11"}
                data-plasmic-override={overrides.rectangle11}
                className={classNames(projectcss.all, sty.rectangle11)}
              />

              <div
                data-plasmic-name={"bicreditCard2FrontFill"}
                data-plasmic-override={overrides.bicreditCard2FrontFill}
                className={classNames(
                  projectcss.all,
                  sty.bicreditCard2FrontFill
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg__j5Ia2)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u3QTz
                )}
              >
                {"Half-Filled Glass"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rEbF
                )}
              >
                {"Detected: 3"}
              </div>
              {false ? (
                <div
                  data-plasmic-name={"maskGroup"}
                  data-plasmic-override={overrides.maskGroup}
                  className={classNames(projectcss.all, sty.maskGroup)}
                >
                  <div
                    data-plasmic-name={"image2"}
                    data-plasmic-override={overrides.image2}
                    className={classNames(projectcss.all, sty.image2)}
                  />
                </div>
              ) : null}
              <div
                data-plasmic-name={"image14"}
                data-plasmic-override={overrides.image14}
                className={classNames(projectcss.all, sty.image14)}
              />
            </div>
            <div
              data-plasmic-name={"group50"}
              data-plasmic-override={overrides.group50}
              className={classNames(projectcss.all, sty.group50)}
            >
              <div
                data-plasmic-name={"rectangle12"}
                data-plasmic-override={overrides.rectangle12}
                className={classNames(projectcss.all, sty.rectangle12)}
              />

              <div
                data-plasmic-name={"bicreditCard2FrontFill2"}
                data-plasmic-override={overrides.bicreditCard2FrontFill2}
                className={classNames(
                  projectcss.all,
                  sty.bicreditCard2FrontFill2
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg__vfZuw)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a0Yjk
                )}
              >
                {"Full glass"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fh2OY
                )}
              >
                {"Detected: 3"}
              </div>
              {false ? (
                <div
                  data-plasmic-name={"maskGroup2"}
                  data-plasmic-override={overrides.maskGroup2}
                  className={classNames(projectcss.all, sty.maskGroup2)}
                >
                  <div
                    data-plasmic-name={"image3"}
                    data-plasmic-override={overrides.image3}
                    className={classNames(projectcss.all, sty.image3)}
                  />
                </div>
              ) : null}
              <div
                data-plasmic-name={"image15"}
                data-plasmic-override={overrides.image15}
                className={classNames(projectcss.all, sty.image15)}
              />
            </div>
            <div
              data-plasmic-name={"group48"}
              data-plasmic-override={overrides.group48}
              className={classNames(projectcss.all, sty.group48)}
            >
              <div
                data-plasmic-name={"rectangle13"}
                data-plasmic-override={overrides.rectangle13}
                className={classNames(projectcss.all, sty.rectangle13)}
              />

              <div
                data-plasmic-name={"bicreditCard2FrontFill3"}
                data-plasmic-override={overrides.bicreditCard2FrontFill3}
                className={classNames(
                  projectcss.all,
                  sty.bicreditCard2FrontFill3
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg__eV8OL)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xqQaV
                )}
              >
                {"Empty Glass"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a2MCm
                )}
              >
                {"Detected: 1"}
              </div>
              {false ? (
                <div
                  data-plasmic-name={"maskGroup3"}
                  data-plasmic-override={overrides.maskGroup3}
                  className={classNames(projectcss.all, sty.maskGroup3)}
                >
                  <div
                    data-plasmic-name={"image4"}
                    data-plasmic-override={overrides.image4}
                    className={classNames(projectcss.all, sty.image4)}
                  />

                  <div
                    data-plasmic-name={"image5"}
                    data-plasmic-override={overrides.image5}
                    className={classNames(projectcss.all, sty.image5)}
                  />
                </div>
              ) : null}
              <div
                data-plasmic-name={"image16"}
                data-plasmic-override={overrides.image16}
                className={classNames(projectcss.all, sty.image16)}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__en2T
              )}
            >
              {"Table 1"}
            </div>
            <button
              data-plasmic-name={"rectangle2"}
              data-plasmic-override={overrides.rectangle2}
              className={classNames(
                projectcss.all,
                projectcss.button,
                sty.rectangle2
              )}
              onClick={async event => {
                const $steps = {};
                $steps["useIntegration"] = true
                  ? (() => {
                      const actionArgs = {};
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "dataSourceOp",
                          interactionUuid: "SHeSFstgG",
                          componentUuid: "JevoQM4jsT"
                        },
                        () =>
                          (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                { userAuthToken: dataSourcesCtx?.userAuthToken }
                              );
                              if (
                                dataOp.invalidatedKeys &&
                                dataOp.invalidatedKeys.find(
                                  key => key === "plasmic_refresh_all"
                                )
                              ) {
                                await Promise.all(
                                  Array.from(cache.keys()).map(async key =>
                                    mutate(key)
                                  )
                                );
                                return response;
                              }
                              if (dataOp.invalidatedKeys) {
                                await Promise.all(
                                  dataOp.invalidatedKeys.map(
                                    async invalidateKey =>
                                      Promise.all(
                                        Array.from(cache.keys()).map(
                                          async key => {
                                            if (
                                              typeof key === "string" &&
                                              key.includes(
                                                `.$.${invalidateKey}.$.`
                                              )
                                            ) {
                                              return mutate(key);
                                            }
                                            return Promise.resolve();
                                          }
                                        )
                                      )
                                  )
                                );
                              }
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["useIntegration"] === "object" &&
                  typeof $steps["useIntegration"].then === "function"
                ) {
                  $steps["useIntegration"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "dataSourceOp",
                      interactionUuid: "SHeSFstgG",
                      componentUuid: "JevoQM4jsT"
                    },
                    $steps["useIntegration"]
                  );
                }
              }}
              ref={ref => {
                $refs["rectangle2"] = ref;
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9ILs7
              )}
            >
              {"Update"}
            </div>
            <ChevronLeftIcon
              className={classNames(projectcss.all, sty.svg__g9Xat)}
              onClick={async event => {
                const $steps = {};
                $steps["goToMain"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "navigation",
                            interactionUuid: "2qmVROblJ",
                            componentUuid: "JevoQM4jsT",
                            argName: "destination"
                          },
                          () => `/new-page`
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "2qmVROblJ",
                          componentUuid: "JevoQM4jsT"
                        },
                        () =>
                          (({ destination }) => {
                            __nextRouter?.push(destination);
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["goToMain"] === "object" &&
                  typeof $steps["goToMain"].then === "function"
                ) {
                  $steps["goToMain"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "navigation",
                      interactionUuid: "2qmVROblJ",
                      componentUuid: "JevoQM4jsT"
                    },
                    $steps["goToMain"]
                  );
                }
              }}
              role={"img"}
            />

            <div
              data-plasmic-name={"group44"}
              data-plasmic-override={overrides.group44}
              className={classNames(projectcss.all, sty.group44)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g8Brq
                )}
              >
                {"Detected"}
              </div>
            </div>
            <Ellipse11Icon
              className={classNames(projectcss.all, sty.svg___8FyWh)}
              role={"img"}
            />

            <IcsharpHistory2Icon
              className={classNames(projectcss.all, sty.svg___4JCg)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__asCv9
              )}
            >
              {"Error fetching data"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "iPhone11ProMax7",
    "group49",
    "rectangle11",
    "bicreditCard2FrontFill",
    "maskGroup",
    "image2",
    "image14",
    "group50",
    "rectangle12",
    "bicreditCard2FrontFill2",
    "maskGroup2",
    "image3",
    "image15",
    "group48",
    "rectangle13",
    "bicreditCard2FrontFill3",
    "maskGroup3",
    "image4",
    "image5",
    "image16",
    "rectangle2",
    "group44"
  ],

  iPhone11ProMax7: [
    "iPhone11ProMax7",
    "group49",
    "rectangle11",
    "bicreditCard2FrontFill",
    "maskGroup",
    "image2",
    "image14",
    "group50",
    "rectangle12",
    "bicreditCard2FrontFill2",
    "maskGroup2",
    "image3",
    "image15",
    "group48",
    "rectangle13",
    "bicreditCard2FrontFill3",
    "maskGroup3",
    "image4",
    "image5",
    "image16",
    "rectangle2",
    "group44"
  ],

  group49: [
    "group49",
    "rectangle11",
    "bicreditCard2FrontFill",
    "maskGroup",
    "image2",
    "image14"
  ],

  rectangle11: ["rectangle11"],
  bicreditCard2FrontFill: ["bicreditCard2FrontFill"],
  maskGroup: ["maskGroup", "image2"],
  image2: ["image2"],
  image14: ["image14"],
  group50: [
    "group50",
    "rectangle12",
    "bicreditCard2FrontFill2",
    "maskGroup2",
    "image3",
    "image15"
  ],

  rectangle12: ["rectangle12"],
  bicreditCard2FrontFill2: ["bicreditCard2FrontFill2"],
  maskGroup2: ["maskGroup2", "image3"],
  image3: ["image3"],
  image15: ["image15"],
  group48: [
    "group48",
    "rectangle13",
    "bicreditCard2FrontFill3",
    "maskGroup3",
    "image4",
    "image5",
    "image16"
  ],

  rectangle13: ["rectangle13"],
  bicreditCard2FrontFill3: ["bicreditCard2FrontFill3"],
  maskGroup3: ["maskGroup3", "image4", "image5"],
  image4: ["image4"],
  image5: ["image5"],
  image16: ["image16"],
  rectangle2: ["rectangle2"],
  group44: ["group44"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicStatus__ArgProps,
          internalVariantPropNames: PlasmicStatus__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStatus__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStatus";
  } else {
    func.displayName = `PlasmicStatus.${nodeName}`;
  }
  return func;
}

export const PlasmicStatus = Object.assign(
  // Top-level PlasmicStatus renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iPhone11ProMax7: makeNodeComponent("iPhone11ProMax7"),
    group49: makeNodeComponent("group49"),
    rectangle11: makeNodeComponent("rectangle11"),
    bicreditCard2FrontFill: makeNodeComponent("bicreditCard2FrontFill"),
    maskGroup: makeNodeComponent("maskGroup"),
    image2: makeNodeComponent("image2"),
    image14: makeNodeComponent("image14"),
    group50: makeNodeComponent("group50"),
    rectangle12: makeNodeComponent("rectangle12"),
    bicreditCard2FrontFill2: makeNodeComponent("bicreditCard2FrontFill2"),
    maskGroup2: makeNodeComponent("maskGroup2"),
    image3: makeNodeComponent("image3"),
    image15: makeNodeComponent("image15"),
    group48: makeNodeComponent("group48"),
    rectangle13: makeNodeComponent("rectangle13"),
    bicreditCard2FrontFill3: makeNodeComponent("bicreditCard2FrontFill3"),
    maskGroup3: makeNodeComponent("maskGroup3"),
    image4: makeNodeComponent("image4"),
    image5: makeNodeComponent("image5"),
    image16: makeNodeComponent("image16"),
    rectangle2: makeNodeComponent("rectangle2"),
    group44: makeNodeComponent("group44"),
    // Metadata about props expected for PlasmicStatus
    internalVariantProps: PlasmicStatus__VariantProps,
    internalArgProps: PlasmicStatus__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStatus;
/* prettier-ignore-end */
