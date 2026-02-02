import { z } from 'zod';
export declare const OverridesSchema: z.ZodObject<{
    global: z.ZodOptional<z.ZodObject<{
        documentationUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    }, z.core.$strict>>;
    components: z.ZodOptional<z.ZodObject<{
        announcementCard: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodEnum<{
                marketing: "marketing";
                changelog: "changelog";
            }>>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            ctaText: z.ZodOptional<z.ZodString>;
            ctaUrl: z.ZodOptional<z.ZodString>;
            openInNewTab: z.ZodOptional<z.ZodBoolean>;
            className: z.ZodOptional<z.ZodString>;
            disabled: z.ZodOptional<z.ZodBoolean>;
            defaultLogo: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        sidenavFooterMenu: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodEmail>;
            documentationUrl: z.ZodOptional<z.ZodURL>;
            disableAccountLink: z.ZodOptional<z.ZodBoolean>;
            disableChangeFeedLink: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        changeFeed: z.ZodOptional<z.ZodObject<{
            sourceData: z.ZodURL;
            refetchInterval: z.ZodOptional<z.ZodNumber>;
            fallbackData: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                date: z.ZodString;
                title: z.ZodString;
                description: z.ZodString;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
            onError: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.core.$ZodFunctionOut>>;
            showLoading: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type Overrides = z.infer<typeof OverridesSchema>;
export declare function validateOverrides(data: unknown): {
    valid: Overrides;
    errors: Array<{
        key: string;
        message: string;
    }>;
};
//# sourceMappingURL=schemas.d.ts.map